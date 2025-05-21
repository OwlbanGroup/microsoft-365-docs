/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('Dashboard Frontend Tests', () => {
  let script;
  let container;

  beforeAll(() => {
    // Load the HTML file into the DOM
    const html = fs.readFileSync(path.resolve(__dirname, '../dashboard/index.html'), 'utf8');
    document.documentElement.innerHTML = html;

    // Load the script.js file
    script = require('../dashboard/script.js');
  });

  beforeEach(() => {
    container = document.body;
  });

  afterEach(() => {
    // Clear status log after each test
    const statusLog = document.getElementById('status-log');
    if (statusLog) {
      statusLog.textContent = '';
    }
  });

  test('Initial DOM elements exist', () => {
    expect(document.getElementById('lan-server-details')).not.toBeNull();
    expect(document.getElementById('subsidiaries-list')).not.toBeNull();
    expect(document.getElementById('refresh-btn')).not.toBeNull();
    expect(document.getElementById('sync-btn')).not.toBeNull();
    expect(document.getElementById('status-log')).not.toBeNull();
  });

  test('logStatus appends messages to status log', () => {
    const statusLog = document.getElementById('status-log');
    const logStatus = window.logStatus;
    logStatus('Test message');
    expect(statusLog.textContent).toMatch(/Test message/);
  });

  test('loadLanServerDetails updates LAN server details section', () => {
    const lanServerDetailsDiv = document.getElementById('lan-server-details');
    const loadLanServerDetails = window.loadLanServerDetails;
    const lanData = {
      hostname: 'test-host',
      ip_address: '192.168.1.1',
      subnet_mask: '255.255.255.0',
      gateway: '192.168.1.254',
      dns_servers: ['8.8.8.8', '8.8.4.4']
    };
    loadLanServerDetails(lanData);
    expect(lanServerDetailsDiv.innerHTML).toContain('test-host');
    expect(lanServerDetailsDiv.innerHTML).toContain('192.168.1.1');
  });

  test('loadSubsidiaries populates subsidiaries list', () => {
    const subsidiariesListDiv = document.getElementById('subsidiaries-list');
    const loadSubsidiaries = window.loadSubsidiaries;
    const subsidiaries = [
      { name: 'Sub1', location: 'Loc1', connection_type: 'VPN', vpn_endpoint: 'endpoint1' },
      { name: 'Sub2', location: 'Loc2', connection_type: 'MPLS', mpls_provider: 'provider2' }
    ];
    loadSubsidiaries(subsidiaries);
    expect(subsidiariesListDiv.children.length).toBe(2);
    expect(subsidiariesListDiv.innerHTML).toContain('Sub1');
    expect(subsidiariesListDiv.innerHTML).toContain('Loc2');
  });
});
