document.addEventListener('DOMContentLoaded', () => {
    const lanServerDetailsDiv = document.getElementById('lan-server-details');
    const subsidiariesListDiv = document.getElementById('subsidiaries-list');
    const statusLog = document.getElementById('status-log');
    const refreshBtn = document.getElementById('refresh-btn');
    const syncBtn = document.getElementById('sync-btn');

    let currentConfig = null;

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

    function loadLanServerDetails(lan) {
        lanServerDetailsDiv.innerHTML = `
            <p><strong>Hostname:</strong> ${lan.hostname}</p>
            <p><strong>IP Address:</strong> ${lan.ip_address}</p>
            <p><strong>Subnet Mask:</strong> ${lan.subnet_mask}</p>
            <p><strong>Gateway:</strong> ${lan.gateway}</p>
            <p><strong>DNS Servers:</strong> ${lan.dns_servers.join(', ')}</p>
        `;
    }

    function loadSubsidiaries(subsidiaries) {
        subsidiariesListDiv.innerHTML = '';
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

    function logStatus(message) {
        const timestamp = new Date().toLocaleTimeString();
        statusLog.textContent += `[${timestamp}] ${message}\n`;
        statusLog.scrollTop = statusLog.scrollHeight;
    }

    refreshBtn.addEventListener('click', async () => {
        logStatus('Refreshing data...');
        const config = await fetchConfig();
        if (config) {
            currentConfig = config;
            loadLanServerDetails(config.lan_server);
            loadSubsidiaries(config.subsidiaries);
            logStatus('Data refreshed.');
        }
    });

    syncBtn.addEventListener('click', () => {
        logStatus('Syncing configuration...');
        // In a real app, this would trigger backend sync, e.g., call PowerShell script
        setTimeout(() => {
            logStatus('Configuration synced successfully.');
        }, 2000);
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
