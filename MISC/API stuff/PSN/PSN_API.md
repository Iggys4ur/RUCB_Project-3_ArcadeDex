
# PowerShell API Template - PSN_API.ps1

## Overview

This script provides a template for setting up persistent global variables from a PowerShell terminal. It uses PowerShell's ability to modify the profile and create environment variables that persist across sessions.

## Script Components

### Global Variables

- `$makeGlobalTemplate`: Contains the template for adding persistent global variables.
- `$makeGlobalHelp`: Holds the documentation and usage information for the template.

### Functions

- **Show-MakeGlobalTemplate**: Displays the template with color formatting.
  - **Parameters**: `None`
  - **Output**: Displays the global variable template in green, with a title in yellow.

- **Show-MakeGlobalHelp**: Shows help documentation for using the template.
  - **Parameters**: `None`
  - **Output**: Displays help information in cyan.

### Usage

1. **Load the Script**: Run the script in a PowerShell session to set up the variables and functions.

    ```powershell
    .\PSN_API.ps1
    ```

2. **Display the Template**:

    ```powershell
    Show-MakeGlobalTemplate
    ```

    This will output the following, with colors applied:
    - **Yellow**: Title
    - **Green**: The template content

3. **Display Help Information**:

    ```powershell
    Show-MakeGlobalHelp
    ```

    This provides detailed information on how to use the `makeGlobalTemplate`.

## Example

To use the template to set an environment variable, replace the placeholders in the template with your specific values:

```powershell
Set-Content -Path $PROFILE_PATH -Value "[System.Environment]::SetEnvironmentVariable('MyVariable', 'MyValue', 'User')" ; . $PROFILE_PATH
```

- `PROFILE_PATH`: Path to your PowerShell profile.
- `VARIABLE_NAME`: Name of the environment variable.
- `VARIABLE_VALUE`: Value of the environment variable.
- `SCOPE`: Scope of the variable ('User', 'Machine', 'Process').

## Conclusion

This script provides a flexible way to manage persistent global settings in PowerShell, enhancing both development efficiency and session management.

---

For further details, refer to the comments within the `PSN_API.ps1` script.

