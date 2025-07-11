// Additional security: HTTPS support with self-signed certificate
const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const yaml = require('js-yaml');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const { execFile } = require('child_process');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const port = 3000;

const authToken = process.env.AUTH_TOKEN;
if (!authToken) {
  console.warn('Warning: AUTH_TOKEN environment variable is not set.');
}

function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  if (token === `Bearer ${authToken}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});

app.use(limiter);
app.use(helmet());
app.use(compression());
app.use(morgan('combined'));

// Add JSON body parser middleware globally
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'dashboard')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

// New POST /api/spend-profits endpoint
app.post('/api/spend-profits', authenticate, (req, res) => {
  const { amount, currency, payment_method, description } = req.body;

  // Basic validation
  if (
    typeof amount !== 'number' ||
    amount <= 0 ||
    typeof currency !== 'string' ||
    currency.trim() === '' ||
    typeof payment_method !== 'string' ||
    payment_method.trim() === ''
  ) {
    return res.status(400).json({ error: 'Invalid input parameters' });
  }

  // Here you would add real payment processing logic, e.g., call Stripe API
  // For now, return a dummy paymentIntent id
  const dummyPaymentIntent = {
    id: 'pi_dummy_1234567890',
    amount,
    currency,
    payment_method,
    description: description || '',
    status: 'succeeded',
  };

  res.status(200).json({ paymentIntent: dummyPaymentIntent });
});

let cachedLanConfig = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

app.get('/api/config', (req, res) => {
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
      res.json(data);
    } catch (parseErr) {
      console.error('Error parsing YAML file:', parseErr);
      res.status(500).json({ error: 'Failed to parse configuration file' });
    }
  });
});

app.post('/api/sync', authenticate, (req, res) => {
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

app.put('/api/config', authenticate, express.json(), (req, res) => {
  const newConfig = req.body;
  if (!newConfig || typeof newConfig !== 'object') {
    return res.status(400).json({ error: 'Invalid configuration data' });
  }
  const configPath = path.join(__dirname, 'lan-setup', 'lan-config.yaml');
  try {
    const yamlStr = yaml.dump(newConfig);
    fs.writeFile(configPath, yamlStr, 'utf8', (err) => {
      if (err) {
        console.error('Error writing YAML file:', err);
        return res.status(500).json({ error: 'Failed to write configuration file' });
      }
      cachedLanConfig = newConfig;
      lastCacheTime = Date.now();
      res.json({ message: 'Configuration updated successfully' });
    });
  } catch (e) {
    console.error('Error dumping YAML:', e);
    res.status(500).json({ error: 'Failed to process configuration data' });
  }
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use((err, req, res) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'certs', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'certs', 'server.crt'))
};

const httpsServer = https.createServer(sslOptions, app);

httpsServer.listen(port, () => {
  console.log(`HTTPS Server running at https://localhost:${port}`);
});

module.exports = { app, httpsServer };
