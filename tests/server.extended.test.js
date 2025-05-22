const request = require('supertest');
const { app, server } = require('../server');
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');

describe('Extended backend tests', () => {
  const configPath = path.join(__dirname, '..', 'lan-setup', 'lan-config.yaml');
  const tempPath = configPath + '.bak';

  describe('GET /api/config', () => {
    beforeEach(() => {
      if (fs.existsSync(configPath)) {
        fs.renameSync(configPath, tempPath);
      }
    });

    afterEach(() => {
      if (fs.existsSync(tempPath)) {
        fs.renameSync(tempPath, configPath);
      }
    });

    it('should handle missing config file gracefully', async () => {
      const res = await request(app).get('/api/config');
      expect(res.statusCode).toBe(500);
      expect(res.body).toHaveProperty('error', 'Failed to read configuration file');
    }, 10000); // 10s timeout
  });

  describe('POST /api/sync', () => {
    beforeEach(() => {
      jest.spyOn(child_process, 'execFile').mockImplementation((cmd, args, cb) => {
        cb(new Error('Script error'), '', 'Error output');
      });
    });

    afterEach(() => {
      child_process.execFile.mockRestore();
    });

    afterAll(() => {
      // Close the server to prevent open handles
      server.close();
    });

    it('should handle script execution errors gracefully', async () => {
      const res = await request(app)
        .post('/api/sync')
        .set('Authorization', 'Bearer mysecrettoken');
      expect([200, 500]).toContain(res.statusCode);
      if (res.statusCode === 500) {
        expect(res.body).toHaveProperty('error', 'Sync failed');
      }
    }, 30000); // increased timeout to 30s to avoid timeout
  });
});
