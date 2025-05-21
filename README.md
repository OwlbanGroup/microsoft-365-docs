# LAN Setup Dashboard

## Overview

This project is a web-based dashboard for visualizing and managing LAN (Local Area Network) configurations. It consists of a backend Express server that serves static frontend files and provides an API endpoint to fetch LAN configuration data from a YAML file. The frontend displays LAN server details, subsidiaries connections, and provides actions to refresh data and sync configuration.

## Features

- View LAN server details including hostname, IP address, subnet mask, gateway, and DNS servers.
- View subsidiaries connection information.
- Refresh data from the backend API.
- Sync configuration (simulated).

## Project Structure

- `server.js`: Express backend server.
- `dashboard/`: Frontend files (HTML, CSS, JavaScript).
- `lan-setup/lan-config.yaml`: LAN configuration file in YAML format.

## Setup and Running

1. Ensure you have [Node.js](https://nodejs.org/) installed.

2. Install dependencies:

   ```
   npm install express js-yaml
   ```

3. Start the server:

   ```
   node server.js
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Usage

- Use the "Refresh Data" button to reload the LAN configuration.
- Use the "Sync Configuration" button to simulate syncing the configuration.

## Future Improvements

- Add authentication and authorization.
- Implement real sync functionality.
- Add more detailed views and editing capabilities.
- Add automated tests and CI/CD pipeline.
- Enhance security and error handling.

## License

This project is licensed under the MIT License.
