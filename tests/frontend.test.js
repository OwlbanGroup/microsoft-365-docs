/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Frontend UI interaction tests', () => {
  let scriptContent;
  let container;

  beforeAll(() => {
    // Load the script.js content
    scriptContent = fs.readFileSync(path.resolve(__dirname, '../dashboard/script.js'), 'utf8');
  });

  beforeEach(() => {
    // Set up our document body
    document.body.innerHTML = `
      <div id="lan-server-details"></div>
      <div id="subsidiaries-list"></div>
      <pre id="status-log"></pre>
      <button id="refresh-btn"></button>
      <button id="sync-btn"></button>
    `;

    // Evaluate the script.js in the test environment
    eval(scriptContent);
  });

  test('Initial load fetches and displays data', async () => {
    // Mock fetch to return sample config data
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          lan_server: {
            hostname: 'test-host',
            ip_address: '192.168.1.1',
            subnet_mask: '255.255.255.0',
            gateway: '192.168.1.254',
            dns_servers: ['8.8.8.8', '8.8.4.4']
          },
          subsidiaries: [
            { name: 'Sub1', location: 'Loc1', connection_type: 'VPN', vpn_endpoint: 'vpn.sub1.com' }
          ]
        }),
      })
    );

    // Wait for initial load async function to complete
    await new Promise(process.nextTick);

    // Check that LAN server details are populated
    const lanDetails = document.getElementById('lan-server-details').innerHTML;
    expect(lanDetails).toContain('test-host');
    expect(lanDetails).toContain('192.168.1.1');

    // Check that subsidiaries list is populated
    const subsList = document.getElementById('subsidiaries-list').innerHTML;
    expect(subsList).toContain('Sub1');
    expect(subsList).toContain('vpn.sub1.com');

    // Check that status log contains 'Dashboard loaded.'
    const statusLog = document.getElementById('status-log').textContent;
    expect(statusLog).toMatch(/Dashboard loaded\./);
  });

  test('Refresh button fetches and updates data', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          lan_server: { hostname: 'refresh-host', ip_address: '10.0.0.1', subnet_mask: '', gateway: '', dns_servers: [] },
          subsidiaries: []
        }),
      })
    );

    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.click();

    // Wait for async fetchConfig to complete
    await new Promise(process.nextTick);

    const lanDetails = document.getElementById('lan-server-details').innerHTML;
    expect(lanDetails).toContain('refresh-host');

    const statusLog = document.getElementById('status-log').textContent;
    expect(statusLog).toMatch(/Refreshing data\.\.\./);
    expect(statusLog).toMatch(/Data refreshed\./);
  });

  test('Sync button triggers sync API and logs output', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'Sync completed successfully', output: 'Sync output here' }),
      })
    );

    const syncBtn = document.getElementById('sync-btn');
    syncBtn.click();

    // Wait for async sync to complete
    await new Promise(process.nextTick);

    const statusLog = document.getElementById('status-log').textContent;
    expect(statusLog).toMatch(/Syncing configuration\.\.\./);
    expect(statusLog).toMatch(/Configuration synced successfully\./);
    expect(statusLog).toMatch(/Sync output here/);
  });

  test('Handles fetch config error gracefully', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('Fetch failed')));

    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.click();

    // Wait for async fetchConfig to complete
    await new Promise(process.nextTick);

    const statusLog = document.getElementById('status-log').textContent;
    expect(statusLog).toMatch(/Error fetching config: Fetch failed/);
  });

  test('Handles sync API error gracefully', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ error: 'Sync failed' }),
      })
    );

    const syncBtn = document.getElementById('sync-btn');
    syncBtn.click();

    // Wait for async sync to complete
    await new Promise(process.nextTick);

    const statusLog = document.getElementById('status-log').textContent;
    expect(statusLog).toMatch(/Sync error: Sync failed/);
  });
});
