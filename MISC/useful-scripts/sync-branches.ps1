
# API-Template_PSN.ps1

# Set up a global variable with your template
$Global:makeGlobalTemplate = @"
# Template for Adding Persistent Global Variables from a PowerShell Terminal

Set-Content -Path \$PROFILE_PATH -Value "[System.Environment]::SetEnvironmentVariable('VARIABLE_NAME', 'VARIABLE_VALUE', 'SCOPE')" ; . \$PROFILE_PATH
"@

# Define a function to display the template with color and formatting
function Show-MakeGlobalTemplate {
    param (
        [string]$Template = $makeGlobalTemplate
    )

    # Using Write-Host for color formatting
    Write-Host "# PowerShell Global Variable Template" -ForegroundColor Yellow
    Write-Host $Template -ForegroundColor Green
}

# Documentation for $makeGlobalTemplate
$Global:makeGlobalHelp = @"
# Purpose:
#   This script demonstrates how to add persistent global variables from a PowerShell terminal.
#   It uses a combination of Set-Content and dot-sourcing to update the PowerShell profile.
#
# Usage:
#   To view the template, run: Show-MakeGlobalTemplate
#   Customize the placeholders for your specific needs:
#   - PROFILE_PATH: Path to your PowerShell profile.
#   - VARIABLE_NAME: Name of the environment variable.
#   - VARIABLE_VALUE: Value of the environment variable.
#   - SCOPE: Scope of the variable ('User', 'Machine', 'Process').
"@

# Function to display help information
function Show-MakeGlobalHelp {
    Write-Host $makeGlobalHelp -ForegroundColor Cyan
}

# Optionally run this script to set the template on script execution
Show-MakeGlobalTemplate
Show-MakeGlobalHelp
