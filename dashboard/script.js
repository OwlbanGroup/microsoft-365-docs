/**
 * @typedef {Object} LanServer
 * @property {string} hostname
 * @property {string} ip_address
 * @property {string} subnet_mask
 * @property {string} gateway
 * @property {string[]} dns_servers
 *
 * @typedef {Object} Subsidiary
 * @property {string} name
 * @property {string} location
 * @property {string} connection_type
 * @property {string} [vpn_endpoint]
 * @property {string} [mpls_provider]
 */

document.addEventListener('DOMContentLoaded', () => {
  const lanServerDetailsDiv = document.getElementById('lan-server-details');
  const subsidiariesListDiv = document.getElementById('subsidiaries-list');
  const statusLog = document.getElementById('status-log');
  const refreshBtn = document.getElementById('refresh-btn');
  const syncBtn = document.getElementById('sync-btn');

  /** @type {LanServer | null} */
  let currentConfig = null;

  /**
   * Fetch LAN configuration from the server
   * @returns {Promise<LanServer | null>}
   */
  async function fetchConfig() {
    try {
      const response = await fetch('/api/config');
      if (!response.ok) {
        throw new Error('Failed to fetch configuration');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      logStatus(`Error fetching config: ${error.message}`);
      return null;
    }
  }

  /**
   * Load LAN server details into the UI
   * @param {LanServer | null} lan
   */
  function loadLanServerDetails(lan) {
    if (!lan) {
      lanServerDetailsDiv.innerHTML = '<p>No LAN server data available.</p>';
      return;
    }
    lanServerDetailsDiv.innerHTML = `
      <p><strong>Hostname:</strong> ${lan.hostname}</p>
      <p><strong>IP Address:</strong> ${lan.ip_address}</p>
      <p><strong>Subnet Mask:</strong> ${lan.subnet_mask}</p>
      <p><strong>Gateway:</strong> ${lan.gateway}</p>
      <p><strong>DNS Servers:</strong> ${lan.dns_servers.join(', ')}</p>
    `;
  }

  /**
   * Load subsidiaries list into the UI
   * @param {Subsidiary[] | null} subsidiaries
   */
  function loadSubsidiaries(subsidiaries) {
    subsidiariesListDiv.innerHTML = '';
    if (!subsidiaries || !Array.isArray(subsidiaries)) {
      subsidiariesListDiv.innerHTML = '<p>No subsidiaries data available.</p>';
      return;
    }
    subsidiaries.forEach(sub => {
      const div = document.createElement('div');
      div.className = 'subsidiary';
      div.innerHTML = `
        <p><strong>Name:</strong> ${sub.name}</p>
        <p><strong>Location:</strong> ${sub.location}</p>
        <p><strong>Connection Type:</strong> ${sub.connection_type}</p>
        <p><strong>Endpoint:</strong> ${sub.vpn_endpoint || sub.mpls_provider || 'N/A'}</p>
      `;
      subsidiariesListDiv.appendChild(div);
    });
  }

  /**
   * Log status messages with timestamp
   * @param {string} message
   */
  function logStatus(message) {
    const timestamp = new Date().toLocaleTimeString();
    statusLog.textContent += `[${timestamp}] ${message}\n`;
    statusLog.scrollTop = statusLog.scrollHeight;
  }

  // Expose functions for testing
  window.loadLanServerDetails = loadLanServerDetails;
  window.loadSubsidiaries = loadSubsidiaries;
  window.logStatus = logStatus;

  refreshBtn.addEventListener('click', async () => {
    logStatus('Refreshing data...');
    refreshBtn.disabled = true;
    const loadingIndicator = document.createElement('span');
    loadingIndicator.className = 'loading-indicator';
    refreshBtn.appendChild(loadingIndicator);

    // Debounce: prevent multiple rapid clicks
    if (refreshBtn._debounceTimeout) {
      clearTimeout(refreshBtn._debounceTimeout);
    }
    refreshBtn._debounceTimeout = setTimeout(async () => {
      const config = await fetchConfig();
      if (config) {
        currentConfig = config;
        loadLanServerDetails(config.lan_server);
        loadSubsidiaries(config.subsidiaries);
        logStatus('Data refreshed.');
      }
      refreshBtn.removeChild(loadingIndicator);
      refreshBtn.disabled = false;
    }, 300);
  });

  syncBtn.addEventListener('click', async () => {
    logStatus('Syncing configuration...');
    syncBtn.disabled = true;
    const loadingIndicator = document.createElement('span');
    loadingIndicator.className = 'loading-indicator';
    syncBtn.appendChild(loadingIndicator);

    try {
      const response = await fetch('/api/sync', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer mysecrettoken'
        }
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Sync failed');
      }
      const data = await response.json();
      logStatus('Configuration synced successfully.');
      logStatus(data.output);
    } catch (error) {
      logStatus(`Sync error: ${error.message}`);
    } finally {
      syncBtn.removeChild(loadingIndicator);
      syncBtn.disabled = false;
    }
  });

  // Initial load
  (async () => {
    const config = await fetchConfig();
    if (config) {
      currentConfig = config;
      loadLanServerDetails(config.lan_server);
      loadSubsidiaries(config.subsidiaries);
      logStatus('Dashboard loaded.');
    }
  })();
});
