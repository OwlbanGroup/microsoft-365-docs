document.addEventListener('DOMContentLoaded', () => {
    const lanServerDetailsDiv = document.getElementById('lan-server-details');
    const subsidiariesListDiv = document.getElementById('subsidiaries-list');
    const statusLog = document.getElementById('status-log');
    const refreshBtn = document.getElementById('refresh-btn');
    const syncBtn = document.getElementById('sync-btn');

    // Sample data to simulate loading from lan-config.yaml
    // In a real app, this could be fetched from a backend API or local file
    const sampleConfig = {
        lan_server: {
            hostname: "owlban-lan-server",
            ip_address: "192.168.1.1",
            subnet_mask: "255.255.255.0",
            gateway: "192.168.1.254",
            dns_servers: ["8.8.8.8", "8.8.4.4"]
        },
        subsidiaries: [
            { name: "Subsidiary A", location: "New York", connection_type: "VPN", vpn_endpoint: "vpn.subsidiarya.owlban.com" },
            { name: "Subsidiary B", location: "London", connection_type: "VPN", vpn_endpoint: "vpn.subsidiaryb.owlban.com" },
            { name: "Subsidiary C", location: "Tokyo", connection_type: "MPLS", mpls_provider: "mpls.subsidiaryc.owlban.com" },
            { name: "Subsidiary D", location: "Sydney", connection_type: "VPN", vpn_endpoint: "vpn.subsidiaryd.owlban.com" }
        ]
    };

    function loadLanServerDetails() {
        const lan = sampleConfig.lan_server;
        lanServerDetailsDiv.innerHTML = `
            <p><strong>Hostname:</strong> ${lan.hostname}</p>
            <p><strong>IP Address:</strong> ${lan.ip_address}</p>
            <p><strong>Subnet Mask:</strong> ${lan.subnet_mask}</p>
            <p><strong>Gateway:</strong> ${lan.gateway}</p>
            <p><strong>DNS Servers:</strong> ${lan.dns_servers.join(', ')}</p>
        `;
    }

    function loadSubsidiaries() {
        subsidiariesListDiv.innerHTML = '';
        sampleConfig.subsidiaries.forEach(sub => {
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

    refreshBtn.addEventListener('click', () => {
        logStatus('Refreshing data...');
        loadLanServerDetails();
        loadSubsidiaries();
        logStatus('Data refreshed.');
    });

    syncBtn.addEventListener('click', () => {
        logStatus('Syncing configuration...');
        // In a real app, this would trigger backend sync, e.g., call PowerShell script
        setTimeout(() => {
            logStatus('Configuration synced successfully.');
        }, 2000);
    });

    // Initial load
    loadLanServerDetails();
    loadSubsidiaries();
    logStatus('Dashboard loaded.');
});
