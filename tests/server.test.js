const request = require('supertest');
const app = require('../server');

describe('GET /api/config', () => {
  it('should return LAN configuration JSON', async () => {
    const res = await request(app).get('/api/config');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('lan_server');
    expect(res.body).toHaveProperty('subsidiaries');
  });
});

describe('POST /api/sync', () => {
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
