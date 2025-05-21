# LAN Setup Dashboard

## Overview

This project is a web-based dashboard for visualizing and managing LAN (Local Area Network) configurations. It consists of a backend Express server that serves static frontend files and provides an API endpoint to fetch LAN configuration data from a YAML file. The frontend displays LAN server details, subsidiaries connections, and provides actions to refresh data and sync configuration.

## Features

- View LAN server details including hostname, IP address, subnet mask, gateway, and DNS servers.
- View subsidiaries connection information.
- Refresh data from the backend API.
- Sync configuration (real functionality via PowerShell script).
- Basic token-based authentication for sync API.

## Project Structure

- `server.js`: Express backend server.
- `dashboard/`: Frontend files (HTML, CSS, JavaScript).
- `lan-setup/lan-config.yaml`: LAN configuration file in YAML format.
- `lan-setup/setup-lan.ps1`: PowerShell script to sync LAN configuration.

## Setup and Running

1. Ensure you have [Node.js](https://nodejs.org/) installed.

2. Install dependencies:

   ```
   npm install express js-yaml helmet morgan
   ```

3. Start the server:

   ```
   node server.js
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Usage

- Use the "Refresh Data" button to reload the LAN configuration.
- Use the "Sync Configuration" button to trigger the real sync process. This requires authentication.

### Authentication

The sync API requires a bearer token in the `Authorization` header. The default token is `mysecrettoken`. The frontend is preconfigured to use this token.

## Future Improvements

- Add more detailed views and editing capabilities.
- Add automated tests and CI/CD pipeline.
- Enhance security and error handling.
- Implement user management and secure authentication.

## Deployment

You can deploy this application using Docker:

1. Build the Docker image:

   ```bash
   docker build -t lan-setup-dashboard .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 lan-setup-dashboard
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the dashboard.

## License

This project is licensed under the MIT License.
