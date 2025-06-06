# Deployment Instructions

## Starting the Server

Use the start script added to package.json to start the server:

```bash
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

## Health Check Endpoint

A health check endpoint is available at `/health` which returns a 200 status and a JSON response indicating the server status. This can be used for container orchestration readiness and liveness probes.

## .dockerignore

The project includes a `.dockerignore` file to exclude unnecessary files and directories from the Docker build context, improving build performance and reducing image size.

## Environment Variable Security

Ensure that the `AUTH_TOKEN` environment variable is set to a secure value in production environments and is not exposed in logs or version control. Use secure secret management solutions where possible.

## Continuous Integration and Deployment

This project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) to automate testing on push and pull requests.

Configure your CI/CD pipeline to run tests and deploy the application automatically.

## Additional Recommendations

- Monitor application logs and set up alerting for critical events.
- Regularly update dependencies to patch security vulnerabilities.
- Follow best practices for secure deployment and operations.
