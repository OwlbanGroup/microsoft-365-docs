# PowerShell script to run Docker container mapping container port 3000 to an alternate host port

param(
    [int]$HostPort = 3001,
    [string]$ImageName = ""
)

if ([string]::IsNullOrEmpty($ImageName)) {
    Write-Host "Please provide the Docker image name as a parameter."
    exit 1
}

Write-Host "Running Docker container mapping host port $HostPort to container port 3000..."
docker run -p $HostPort`:3000 $ImageName
