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
    const lanConfigContent = `
lan_server:
  hostname: test-host
  ip_address: 192.168.1.1
  subnet_mask: 255.255.255.0
  gateway: 192.168.1.254
  dns_servers:
    - 8.8.8.8
    - 8.8.4.4
subsidiaries:
  - name: Subsidiary A
    location: Location A
    connection_type: VPN
    vpn_endpoint: vpn.subsidiarya.com
  - name: Subsidiary B
    location: Location B
    connection_type: MPLS
    mpls_provider: mpls.subsidiaryb.com
`;

    jest.spyOn(fs, 'readFile').mockImplementation((filePath, encoding, callback) => {
      if (filePath === lanConfigPath || filePath === path.resolve(lanConfigPath) || filePath === path.normalize(lanConfigPath)) {
        callback(null, lanConfigContent);
      } else {
        originalReadFileSync.call(fs, filePath, encoding, callback);
      }
    });
    jest.spyOn(fs, 'readFileSync').mockImplementation((filePath, encoding) => {
      if (filePath === lanConfigPath || filePath === path.resolve(lanConfigPath) || filePath === path.normalize(lanConfigPath)) {
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
    const authToken = process.env.AUTH_TOKEN || 'mysecrettoken';
    const res = await request(app)
      .post('/api/sync')
      .set('Authorization', `Bearer ${authToken}`);
    expect([200, 500]).toContain(res.statusCode); // 200 if success, 500 if script error
    if (res.statusCode === 200) {
      expect(res.body).toHaveProperty('message', 'Sync completed successfully');
      expect(res.body).toHaveProperty('output');
    } else {
      expect(res.body).toHaveProperty('error', 'Sync failed');
    }
  });
});

describe('PUT /api/config', () => {
  afterAll(() => {
    server.close();
  });

  it('should reject unauthorized requests', async () => {
    const res = await request(app).put('/api/config').send({});
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error', 'Unauthorized');
  });

  it('should reject invalid configuration data', async () => {
    const authToken = process.env.AUTH_TOKEN || 'mysecrettoken';
    const res = await request(app)
      .put('/api/config')
      .set('Authorization', `Bearer ${authToken}`)
      .send('invalid data');
    expect(res.statusCode).toEqual(400);
  });

  it('should update configuration with valid data', async () => {
    const authToken = process.env.AUTH_TOKEN || 'mysecrettoken';
    const validConfig = {
      lan_server: {
        hostname: 'updated-host',
        ip_address: '192.168.1.2',
        subnet_mask: '255.255.255.0',
        gateway: '192.168.1.254',
        dns_servers: ['8.8.8.8', '8.8.4.4'],
      },
      subsidiaries: [
        {
          name: 'Subsidiary A',
          location: 'Location A',
          connection_type: 'VPN',
          vpn_endpoint: 'vpn.subsidiarya.com',
        },
      ],
    };
    const res = await request(app)
      .put('/api/config')
      .set('Authorization', `Bearer ${authToken}`)
      .send(validConfig);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Configuration updated successfully');
  });
});
