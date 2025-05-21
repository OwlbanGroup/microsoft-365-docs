const request = require('supertest');
const app = require('../server');

describe('Extended backend tests', () => {
  describe('GET /api/config', () => {
    it('should handle missing config file gracefully', async () => {
      const fs = require('fs');
      const path = require('path');
      const configPath = path.join(__dirname, '..', 'lan-setup', 'lan-config.yaml');
      const tempPath = configPath + '.bak';
      if (fs.existsSync(configPath)) {
        fs.renameSync(configPath, tempPath);
      }
      const res = await request(app).get('/api/config');
      expect(res.statusCode).toBe(500);
      expect(res.body).toHaveProperty('error', 'Failed to read configuration file');
      if (fs.existsSync(tempPath)) {
        fs.renameSync(tempPath, configPath);
      }
    });
  });

  describe('POST /api/sync', () => {
    it('should handle script execution errors gracefully', async () => {
      const child_process = require('child_process');
      jest.spyOn(child_process, 'execFile').mockImplementation((cmd, args, cb) => {
        cb(new Error('Script error'), '', 'Error output');
      });
      const res = await request(app)
        .post('/api/sync')
        .set('Authorization', 'Bearer mysecrettoken');
      expect(res.statusCode).toBe(500);
      expect(res.body).toHaveProperty('error', 'Sync failed');
      child_process.execFile.mockRestore();
    });
  });
});
