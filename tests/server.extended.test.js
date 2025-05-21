const request = require('supertest');
const app = require('../server');

describe('Extended Backend API Tests', () => {
  describe('GET /api/config', () => {
    it('should return LAN config as JSON with expected properties', async () => {
      const response = await request(app).get('/api/config');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toHaveProperty('lan_server');
      expect(response.body).toHaveProperty('subsidiaries');
    });

    it('should handle missing config file gracefully', async () => {
      // Temporarily rename the config file to simulate missing file
      const fs = require('fs');
      const path = require('path');
      const configPath = path.join(__dirname, '..', 'lan-setup', 'lan-config.yaml');
      const tempPath = path.join(__dirname, '..', 'lan-setup', 'lan-config.yaml.bak');

      if (fs.existsSync(configPath)) {
        fs.renameSync(configPath, tempPath);
      }

      const response = await request(app).get('/api/config');
      expect(response.statusCode).toBe(500);
      expect(response.body).toHaveProperty('error');

      // Restore the config file
      if (fs.existsSync(tempPath)) {
        fs.renameSync(tempPath, configPath);
      }
    });

    it('should handle invalid YAML content gracefully', async () => {
      const fs = require('fs');
      const path = require('path');
      const configPath = path.join(__dirname, '..', 'lan-setup', 'lan-config.yaml');
      const tempPath = path.join(__dirname, '..', 'lan-setup', 'lan-config.yaml.bak');

      // Backup original content
      const originalContent = fs.readFileSync(configPath, 'utf8');

      // Write invalid YAML content
      fs.writeFileSync(configPath, 'invalid: [unclosed');

      const response = await request(app).get('/api/config');
      expect(response.statusCode).toBe(500);
      expect(response.body).toHaveProperty('error');

      // Restore original content
      fs.writeFileSync(configPath, originalContent);
    });
  });
});
