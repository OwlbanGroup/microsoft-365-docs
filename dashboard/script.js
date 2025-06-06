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

  const editLanBtn = document.getElementById('edit-lan-btn');
  const lanEditForm = document.getElementById('lan-edit-form');
  const cancelLanBtn = document.getElementById('cancel-lan-btn');
  // const saveLanBtn = document.getElementById('save-lan-btn');
  const editHostnameInput = document.getElementById('edit-hostname');
  const editIpInput = document.getElementById('edit-ip');
  const editSubnetInput = document.getElementById('edit-subnet');
  const editGatewayInput = document.getElementById('edit-gateway');
  const editDnsInput = document.getElementById('edit-dns');

  const editSubsidiariesBtn = document.getElementById('edit-subsidiaries-btn');
  const subsidiariesEditForm = document.getElementById('subsidiaries-edit-form');
  const subsidiariesEditList = document.getElementById('subsidiaries-edit-list');
  const cancelSubsidiariesBtn = document.getElementById('cancel-subsidiaries-btn');
  // const saveSubsidiariesBtn = document.getElementById('save-subsidiaries-btn');
  const addSubsidiaryBtn = document.getElementById('add-subsidiary-btn');

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

  // Edit LAN server details handlers
  editLanBtn.addEventListener('click', () => {
    if (!currentConfig || !currentConfig.lan_server) return;
    const lan = currentConfig.lan_server;
    editHostnameInput.value = lan.hostname || '';
    editIpInput.value = lan.ip_address || '';
    editSubnetInput.value = lan.subnet_mask || '';
    editGatewayInput.value = lan.gateway || '';
    editDnsInput.value = lan.dns_servers ? lan.dns_servers.join(', ') : '';
    lanEditForm.style.display = 'block';
    editLanBtn.style.display = 'none';
  });

  cancelLanBtn.addEventListener('click', () => {
    lanEditForm.style.display = 'none';
    editLanBtn.style.display = 'inline-block';
  });

  lanEditForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updatedLan = {
      hostname: editHostnameInput.value.trim(),
      ip_address: editIpInput.value.trim(),
      subnet_mask: editSubnetInput.value.trim(),
      gateway: editGatewayInput.value.trim(),
      dns_servers: editDnsInput.value.split(',').map(s => s.trim()).filter(Boolean),
    };
    if (!currentConfig) return;
    const updatedConfig = {
      ...currentConfig,
      lan_server: updatedLan,
    };
    try {
      const response = await fetch('/api/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer mysecrettoken',
        },
        body: JSON.stringify(updatedConfig),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update configuration');
      }
      currentConfig = updatedConfig;
      loadLanServerDetails(updatedLan);
      logStatus('LAN server details updated successfully.');
      lanEditForm.style.display = 'none';
      editLanBtn.style.display = 'inline-block';
    } catch (error) {
      logStatus(`Error updating LAN server details: ${error.message}`);
    }
  });

  // Edit subsidiaries handlers
  function createSubsidiaryEditDiv(sub, index) {
    const div = document.createElement('div');
    div.className = 'subsidiary-edit';
    div.dataset.index = index;
    div.innerHTML = `
      <label>Name: <input type="text" class="sub-name" value="${sub.name || ''}" required></label><br>
      <label>Location: <input type="text" class="sub-location" value="${sub.location || ''}" required></label><br>
      <label>Connection Type: 
        <select class="sub-connection-type" required>
          <option value="VPN" ${sub.connection_type === 'VPN' ? 'selected' : ''}>VPN</option>
          <option value="MPLS" ${sub.connection_type === 'MPLS' ? 'selected' : ''}>MPLS</option>
        </select>
      </label><br>
      <label>VPN Endpoint: <input type="text" class="sub-vpn-endpoint" value="${sub.vpn_endpoint || ''}"></label><br>
      <label>MPLS Provider: <input type="text" class="sub-mpls-provider" value="${sub.mpls_provider || ''}"></label><br>
      <button type="button" class="remove-subsidiary-btn">Remove</button>
      <hr>
    `;
    return div;
  }

  editSubsidiariesBtn.addEventListener('click', () => {
    if (!currentConfig || !Array.isArray(currentConfig.subsidiaries)) return;
    subsidiariesEditList.innerHTML = '';
    currentConfig.subsidiaries.forEach((sub, index) => {
      const div = createSubsidiaryEditDiv(sub, index);
      subsidiariesEditList.appendChild(div);
    });
    subsidiariesEditForm.style.display = 'block';
    editSubsidiariesBtn.style.display = 'none';
  });

  cancelSubsidiariesBtn.addEventListener('click', () => {
    subsidiariesEditForm.style.display = 'none';
    editSubsidiariesBtn.style.display = 'inline-block';
  });

  addSubsidiaryBtn.addEventListener('click', () => {
    const newSub = {
      name: '',
      location: '',
      connection_type: 'VPN',
      vpn_endpoint: '',
      mpls_provider: '',
    };
    const div = createSubsidiaryEditDiv(newSub, subsidiariesEditList.children.length);
    subsidiariesEditList.appendChild(div);
  });

  subsidiariesEditList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-subsidiary-btn')) {
      const div = e.target.closest('.subsidiary-edit');
      if (div) {
        subsidiariesEditList.removeChild(div);
      }
    }
  });

  subsidiariesEditForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updatedSubs = [];
    const subDivs = subsidiariesEditList.querySelectorAll('.subsidiary-edit');
    subDivs.forEach(div => {
      const name = div.querySelector('.sub-name').value.trim();
      const location = div.querySelector('.sub-location').value.trim();
      const connection_type = div.querySelector('.sub-connection-type').value;
      const vpn_endpoint = div.querySelector('.sub-vpn-endpoint').value.trim();
      const mpls_provider = div.querySelector('.sub-mpls-provider').value.trim();
      if (name && location && connection_type) {
        updatedSubs.push({
          name,
          location,
          connection_type,
          vpn_endpoint: vpn_endpoint || undefined,
          mpls_provider: mpls_provider || undefined,
        });
      }
    });
    if (!currentConfig) return;
    const updatedConfig = {
      ...currentConfig,
      subsidiaries: updatedSubs,
    };
    try {
      const response = await fetch('/api/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer mysecrettoken',
        },
        body: JSON.stringify(updatedConfig),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update configuration');
      }
      currentConfig = updatedConfig;
      loadSubsidiaries(updatedSubs);
      logStatus('Subsidiaries updated successfully.');
      subsidiariesEditForm.style.display = 'none';
      editSubsidiariesBtn.style.display = 'inline-block';
    } catch (error) {
      logStatus(`Error updating subsidiaries: ${error.message}`);
    }
  });

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
