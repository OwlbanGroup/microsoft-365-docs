const express = require('express');
const fs = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const app = express();
const port = 3000;

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

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
