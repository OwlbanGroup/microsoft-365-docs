const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const { execFile } = require('child_process');

const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;

// Simple token-based authentication middleware
require('dotenv').config();
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

// Use helmet for security headers
app.use(helmet());

// Use compression middleware for response compression
app.use(compression());

// Use morgan for HTTP request logging
app.use(morgan('combined'));

// Serve static files from the dashboard directory at root path
app.use('/', express.static(path.join(__dirname, 'dashboard')));

// Redirect root URL to index.html explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

// Cache for LAN config
let cachedLanConfig = null;
let lastCacheTime = 0;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// API endpoint to serve LAN config as JSON
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
      // Basic input validation example
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

// API endpoint to trigger LAN config sync by running PowerShell script
app.post('/api/sync', authenticate, (req, res) => {
  const scriptPath = path.join(__dirname, 'lan-setup', 'setup-lan.ps1');
  execFile('powershell.exe', ['-ExecutionPolicy', 'Bypass', '-File', scriptPath], (error, stdout, stderr) => {
    if (error) {
      console.error('Error executing sync script:', error);
      return res.status(500).json({ error: 'Sync failed', details: stderr });
    }
    // Send response before logging to avoid async logging after tests complete
    res.json({ message: 'Sync completed successfully', output: stdout });
    console.log('Sync script output:', stdout);
  }).on('close', () => {
    // Ensure no async logging after response
  });
});

// Health check endpoint for readiness and liveness probes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server and export the server instance
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = { app, server };
