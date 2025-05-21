# Deployment Instructions

## Starting the Server

Use the start script added to package.json to start the server:

```
npm start
```

## Environment Variables

For production deployment, set the `AUTH_TOKEN` environment variable to a secure value to replace the default token:

On Linux/macOS:

```bash
export AUTH_TOKEN=your_secure_token_here
```

On Windows PowerShell:

```powershell
$env:AUTH_TOKEN="your_secure_token_here"
```

## Docker Deployment

Build the Docker image:

```bash
docker build -t lan-setup-dashboard .
```

Run the Docker container with the environment variable:

```bash
docker run -p 3000:3000 -e AUTH_TOKEN=your_secure_token_here lan-setup-dashboard
```

Open your browser and navigate to `http://localhost:3000` to access the dashboard.
