# PowerShell script to check and stop process using port 3000 on Windows

# Find the process ID (PID) using port 3000
$port = 3000
Write-Host "Checking for process using port $port..."
$netstatOutput = netstat -ano | Select-String ":$port\s"

if ($netstatOutput) {
    $pidValue = ($netstatOutput -split '\s+')[-1]
    Write-Host "Process using port $port found with PID: $pidValue"

    # Get process details
    $process = Get-Process -Id $pidValue -ErrorAction SilentlyContinue
    if ($process) {
        Write-Host "Process name: $($process.ProcessName)"
        # Ask user for confirmation to stop the process
        $confirm = Read-Host "Do you want to stop this process? (Y/N)"
        if ($confirm -eq 'Y' -or $confirm -eq 'y') {
            Stop-Process -Id $pidValue -Force
            Write-Host "Process $pidValue stopped."
        } else {
            Write-Host "Process not stopped."
        }
    } else {
        Write-Host "Process with PID $pidValue not found."
    }
} else {
    Write-Host "No process is using port $port."
}
