# LAN Server Setup and Configuration for Owlban Group

## Overview

This document provides instructions and details for setting up and configuring the Local Area Network (LAN) server located in the main office of the Owlban Group. The LAN server is designed to connect securely to all subsidiaries and assets under management, enabling efficient communication and resource sharing.

## Network Configuration

The network configuration is defined in the `lan-config.yaml` file, which includes:

- LAN server IP address, subnet mask, gateway, and DNS servers.
- Subsidiary locations with their respective IP ranges and connection types (VPN or MPLS).
- Security settings including firewall, VPN encryption, and monitoring.

## Setup Script

The `setup-lan.ps1` PowerShell script automates the configuration process by:

- Setting up the LAN server network settings.
- Establishing VPN or MPLS connections to each subsidiary based on their configuration.
- Providing status messages during the setup process.

## Usage Instructions

1. Review and customize the `lan-config.yaml` file to match your actual network details.
2. Run the `setup-lan.ps1` script on the LAN server with appropriate administrative privileges.
3. Monitor the output for any errors or issues during the connection setup.
4. Verify connectivity to all subsidiaries and assets after the script completes.

## Security Considerations

- Ensure that firewall rules are properly configured to allow necessary traffic.
- Use strong VPN encryption protocols (e.g., AES-256) as specified in the configuration.
- Regularly update and audit network devices and configurations to maintain security.

## Maintenance and Monitoring

- Use centralized network management tools to monitor the health and performance of the LAN connections.
- Schedule regular audits and updates to adapt to changing network requirements and security threats.
- Document any changes to the network configuration and update the configuration files accordingly.

## Support

For assistance with the LAN server setup or network issues, contact the IT department or network administrator.

---

This documentation is part of the Owlban Group's ongoing efforts to maintain a secure and efficient corporate network infrastructure.
