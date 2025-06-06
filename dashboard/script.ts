document.addEventListener('DOMContentLoaded', () => {
    const lanServerDetailsDiv = document.getElementById('lan-server-details') as HTMLDivElement;
    const subsidiariesListDiv = document.getElementById('subsidiaries-list') as HTMLDivElement;
    const statusLog = document.getElementById('status-log') as HTMLTextAreaElement;
    const refreshBtn = document.getElementById('refresh-btn') as HTMLButtonElement;
    const syncBtn = document.getElementById('sync-btn') as HTMLButtonElement;

    async function fetchConfig(): Promise<any | null> {
        try {
            const response = await fetch('/api/config');
            if (!response.ok) {
                throw new Error('Failed to fetch configuration');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            logStatus(`Error fetching config: ${(error as Error).message}`);
            return null;
        }
    }

    function loadLanServerDetails(lan: any) {
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

    function loadSubsidiaries(subsidiaries: any[]) {
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

    function logStatus(message: string) {
        const timestamp = new Date().toLocaleTimeString();
        statusLog.textContent += `[${timestamp}] ${message}\n`;
        statusLog.scrollTop = statusLog.scrollHeight;
    }

    refreshBtn.addEventListener('click', async () => {
        logStatus('Refreshing data...');
        const config = await fetchConfig();
        if (config) {
            loadLanServerDetails(config.lan_server);
            loadSubsidiaries(config.subsidiaries);
            logStatus('Data refreshed.');
        }
    });

    syncBtn.addEventListener('click', async () => {
        logStatus('Syncing configuration...');
        syncBtn.disabled = true;
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
            logStatus(`Sync error: ${(error as Error).message}`);
        } finally {
            syncBtn.disabled = false;
        }
    });

    (async () => {
        const config = await fetchConfig();
        if (config) {
            loadLanServerDetails(config.lan_server);
            loadSubsidiaries(config.subsidiaries);
            logStatus('Dashboard loaded.');
        }
    })();
});
