import express, { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { execFile } from 'child_process';
import rateLimit from 'express-rate-limit';
import https from 'https';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const authToken = process.env.AUTH_TOKEN;
if (!authToken) {
  console.warn('Warning: AUTH_TOKEN environment variable is not set.');
}

function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (token === `Bearer ${authToken}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});

app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));
app.use('/', express.static(path.join(__dirname, 'dashboard')));
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

let cachedLanConfig: any = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

app.get('/api/config', (req: Request, res: Response) => {
  const now = Date.now();
  if (cachedLanConfig && (now - lastCacheTime) < CACHE_TTL_MS) {
    return res.json(cachedLanConfig);
  }
  const configPath = path.join(__dirname, 'lan-setup', 'lan-config.yaml');
  fs.readFile(configPath, 'utf8', (err, fileContents) => {
    if (err) {
      console.error('Error reading YAML file:', err);
      return res.status(500).json({ error: 'Failed to read configuration file' });
    }
    try {
      const data = yaml.load(fileContents);
      if (!data || typeof data !== 'object') {
        return res.status(400).json({ error: 'Invalid configuration data' });
      }
      cachedLanConfig = data;
      lastCacheTime = now;
      return res.json(data);
    } catch (parseErr) {
      console.error('Error parsing YAML file:', parseErr);
      return res.status(500).json({ error: 'Failed to parse configuration file' });
    }
  });
});

app.post('/api/sync', authenticate, (req: Request, res: Response) => {
  const scriptPath = path.join(__dirname, 'lan-setup', 'setup-lan.ps1');
  execFile('powershell.exe', ['-ExecutionPolicy', 'Bypass', '-File', scriptPath], (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing sync script:', error);
      return res.status(500).json({ error: 'Sync failed', details: stderr });
    }
    res.json({ message: 'Sync completed successfully', output: stdout });
    console.log('Sync script output:', stdout);
  }).on('close', () => {});
});

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const useHttps = false; // Set to true if SSL certs are available

if (useHttps) {
  const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.crt'))
  };
  const httpsServer = https.createServer(sslOptions, app);
  httpsServer.listen(port, () => {
    console.log(`HTTPS Server running at https://localhost:${port}`);
  });
  // Export httpsServer and app at top level
} else {
  app.listen(port, () => {
    console.log(`HTTP Server running at http://localhost:${port}`);
  });
  // Export app at top level
}

