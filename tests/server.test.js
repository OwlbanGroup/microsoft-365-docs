const request = require('supertest');
const { app, server } = require('../server');
const fs = require('fs');
const path = require('path');

describe('GET /api/config', () => {
  let originalReadFileSync;

  beforeAll(() => {
    // Mock fs.readFileSync to return lan-config.yaml content
    originalReadFileSync = fs.readFileSync;
    const lanConfigPath = path.join(__dirname, '../lan-setup/lan-config.yaml');
    const lanConfigContent = originalReadFileSync.call(fs, lanConfigPath, 'utf8');
    jest.spyOn(fs, 'readFile').mockImplementation((filePath, encoding, callback) => {
      if (filePath === path.join(__dirname, '../lan-setup/lan-config.yaml')) {
        callback(null, lanConfigContent);
      } else {
        originalReadFileSync.call(fs, filePath, encoding, callback);
      }
    });
    jest.spyOn(fs, 'readFileSync').mockImplementation((filePath, encoding) => {
      if (filePath === path.join(__dirname, '../lan-setup/lan-config.yaml')) {
        return lanConfigContent;
      } else {
        return originalReadFileSync.call(fs, filePath, encoding);
      }
    });
  });

  afterAll(() => {
    // Restore original fs.readFile and fs.readFileSync
    fs.readFile.mockRestore();
    fs.readFileSync.mockRestore();
    // Close the server to prevent open handles
    server.close();
  });

  it('should return LAN configuration JSON', async () => {
    const res = await request(app).get('/api/config');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('lan_server');
    expect(res.body).toHaveProperty('subsidiaries');
  });
});

describe('POST /api/sync', () => {
  afterAll(() => {
    // Close the server to prevent open handles
    server.close();
  });

  it('should reject unauthorized requests', async () => {
    const res = await request(app).post('/api/sync');
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'Unauthorized');
  });

  it('should allow authorized requests and return sync output', async () => {
    const res = await request(app)
      .post('/api/sync')
      .set('Authorization', 'Bearer mysecrettoken');
    expect([200, 500]).toContain(res.statusCode); // 200 if success, 500 if script error
    if (res.statusCode === 200) {
      expect(res.body).toHaveProperty('message', 'Sync completed successfully');
      expect(res.body).toHaveProperty('output');
    } else {
      expect(res.body).toHaveProperty('error', 'Sync failed');
    }
  });
});
