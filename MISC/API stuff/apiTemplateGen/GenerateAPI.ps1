GenerateAPI.ps1

# Define a wrapper function for consistent Write-Host with color settings
function wc {
    param (
        [Parameter(Mandatory = $true)]
        [string]$Message
    )

    # Check if the message is empty
    if ([string]::IsNullOrWhiteSpace($Message)) {
        # Write a space to maintain background color for empty lines
        Write-Host " " -ForegroundColor Yellow -BackgroundColor Cyan
    }
    else {
        Write-Host $Message -ForegroundColor Yellow -BackgroundColor Cyan
    }
}

# Path to the JSON file containing placeholders
$jsonFilePath = "apiTemplateGeneratorPrompt.json"

# Read the JSON file
$jsonContent = Get-Content -Path $jsonFilePath -Raw | ConvertFrom-Json

# Extract placeholders
$placeholders = $jsonContent.placeholders

# List placeholders for the user to fill out
wc "Please provide values for the following placeholders:"
wc " " # Blank line with styling

# Store the values for placeholders in a hashtable
$placeholderValues = @{}

foreach ($placeholder in $placeholders.Keys) {
    $description = $placeholders[$placeholder]
    $value = Read-Host "Enter value for $placeholder ($description)"
    $placeholderValues[$placeholder] = $value
}

# Display the collected placeholder values for confirmation
wc "`nCollected Placeholder Values:"
$placeholderValues.GetEnumerator() | ForEach-Object { wc "$($_.Key) = $($_.Value)" }

# Confirm with the user before proceeding
$confirmation = Read-Host "`nDo you want to proceed with generating the files using these values? (yes/no)"
if ($confirmation -ne "yes") {
    wc "File generation aborted by user."
    exit
}

# Function to replace placeholders in text content
function Replace-Placeholders {
    param (
        [string[]]$content,
        [hashtable]$values
    )

    $replacedContent = @()
    foreach ($line in $content) {
        foreach ($key in $values.Keys) {
            $line = $line -replace [regex]::Escape($key), $values[$key]
        }
        $replacedContent += $line
    }
    return $replacedContent
}

# Generate the PS1 and MD files using the provided template and user inputs
foreach ($file in $jsonContent.files) {
    $fileName = Replace-Placeholders -content @($file.file_name) -values $placeholderValues
    $fileContent = Replace-Placeholders -content $file.content -values $placeholderValues

    # Check if the <API> placeholder has a value
    if (-not $placeholderValues['<API>']) {
        wc "Error: The placeholder <API> must have a value. Please restart the script and provide the required input."
        exit
    }

    $filePath = "$($placeholderValues['<API>'])/$fileName"

    # Debugging output to check the values
    wc "Debug: filePath = $filePath"
    wc "Debug: fileName = $fileName"

    # Create directory if it doesn't exist
    $directoryPath = Split-Path -Path $filePath -Parent
    if (-not (Test-Path -Path $directoryPath)) {
        New-Item -Path $directoryPath -ItemType Directory | Out-Null
    }

    # Write the file content to the output file
    $fileContent | Set-Content -Path $filePath

    wc "Generated file: $filePath"
}

wc "All files have been generated successfully."


