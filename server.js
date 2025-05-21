const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const { execFile } = require('child_process');

const app = express();
const port = 3000;

// Simple token-based authentication middleware
const authToken = process.env.AUTH_TOKEN || 'mysecrettoken'; // Use environment variable for auth token in production
function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  if (token === `Bearer ${authToken}`) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// Use helmet for security headers
app.use(helmet());

// Use morgan for HTTP request logging
app.use(morgan('combined'));

// Serve static files from the dashboard directory at root path
app.use('/', express.static(path.join(__dirname, 'dashboard')));

// Redirect root URL to index.html explicitly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

// API endpoint to serve LAN config as JSON
app.get('/api/config', (req, res) => {
  const configPath = path.join(__dirname, 'lan-setup', 'lan-config.yaml');
  fs.readFile(configPath, 'utf8', (err, fileContents) => {
    if (err) {
      console.error('Error reading YAML file:', err);
      return res.status(500).json({ error: 'Failed to read configuration file' });
    }
    try {
      const data = yaml.load(fileContents);
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
    console.log('Sync script output:', stdout);
    res.json({ message: 'Sync completed successfully', output: stdout });
  });
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
