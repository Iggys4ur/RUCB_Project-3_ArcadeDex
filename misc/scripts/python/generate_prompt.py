import json
import os

# Define the base directory
base_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the JSON configuration file
json_file_path = os.path.join(base_dir, '../../json/prompt_config.json')

# Load the JSON data from the constructed path
with open(json_file_path, 'r') as file:
    config = json.load(file)

# Extract the main details from the JSON
task = config['task']
goal = config['details']['goal']
components = config['details']['components']
requirements = config['details']['requirements']
outputs = config['details']['outputs']
placeholders = config['placeholders']
tone = config['tone']

# Function to format components into a string
def format_components(components):
    components_str = ""
    for component in components:
        components_str += f"Component: {component['name']}\n"
        components_str += f"  Purpose: {component['purpose']}\n"
        if 'integration' in component:
            components_str += f"  Integration: {component['integration']}\n"
        if 'data_source' in component:
            components_str += f"  Data Source: {component['data_source']}\n"
        components_str += "\n"
    return components_str

# Function to format requirements into a string
def format_requirements(requirements):
    return "\n".join([f"- {req}" for req in requirements])

# Function to format placeholders into a string
def format_placeholders(placeholders):
    placeholders_str = ""
    for placeholder in placeholders:
        placeholders_str += f"{placeholder['placeholder']}: {placeholder['description']}\n"
    return placeholders_str

# Generate the prompt
prompt = f"""
{task}

Goal:
{goal}

Components to include:
{format_components(components)}

Requirements:
{format_requirements(requirements)}

Expected Outputs:
- Mockup Images: {', '.join(outputs['mockup_images'])}
- Screenshot: {outputs['screenshot']}
- Home.jsx Files: Raw - {outputs['home_jsx_files']['raw']}, Commented - {outputs['home_jsx_files']['commented']}

Placeholders:
{format_placeholders(placeholders)}

Tone:
{tone}

Instructions:
1. Use the content provided in the arcadex.zip and project-3_assignment.md to guide the creation of React and Tailwind pages.
2. Follow the above components, requirements, and placeholders to ensure the resulting code is modular, scalable, and aligns with the MERN stack and project goals.
3. Incorporate Tailwind CSS for styling and ensure the layout is responsive and user-friendly.
4. Leverage available data models and GraphQL queries for dynamic content loading.
5. Generate the final output files as specified in the outputs section.
"""

# Print the generated prompt
print(prompt)
import json
import os

# Define the base directory
base_dir = os.path.dirname(os.path.abspath(__file__))

# Construct the path to the JSON configuration file
json_file_path = os.path.join(base_dir, '../../json/prompt_config.json')

# Load the JSON data from the constructed path
with open(json_file_path, 'r') as file:
    config = json.load(file)

# Extract the main details from the JSON
task = config['task']
goal = config['details']['goal']
components = config['details']['components']
requirements = config['details']['requirements']
outputs = config['details']['outputs']
placeholders = config['placeholders']
tone = config['tone']

# Function to format components into a string
def format_components(components):
    components_str = ""
    for component in components:
        components_str += f"Component: {component['name']}\n"
        components_str += f"  Purpose: {component['purpose']}\n"
        if 'integration' in component:
            components_str += f"  Integration: {component['integration']}\n"
        if 'data_source' in component:
            components_str += f"  Data Source: {component['data_source']}\n"
        components_str += "\n"
    return components_str

# Function to format requirements into a string
def format_requirements(requirements):
    return "\n".join([f"- {req}" for req in requirements])

# Function to format placeholders into a string
def format_placeholders(placeholders):
    placeholders_str = ""
    for placeholder in placeholders:
        placeholders_str += f"{placeholder['placeholder']}: {placeholder['description']}\n"
    return placeholders_str

# Generate the prompt
prompt = f"""
{task}

Goal:
{goal}

Components to include:
{format_components(components)}

Requirements:
{format_requirements(requirements)}

Expected Outputs:
- Mockup Images: {', '.join(outputs['mockup_images'])}
- Screenshot: {outputs['screenshot']}
- Home.jsx Files: Raw - {outputs['home_jsx_files']['raw']}, Commented - {outputs['home_jsx_files']['commented']}

Placeholders:
{format_placeholders(placeholders)}

Tone:
{tone}

Instructions:
1. Use the content provided in the arcadex.zip and project-3_assignment.md to guide the creation of React and Tailwind pages.
2. Follow the above components, requirements, and placeholders to ensure the resulting code is modular, scalable, and aligns with the MERN stack and project goals.
3. Incorporate Tailwind CSS for styling and ensure the layout is responsive and user-friendly.
4. Leverage available data models and GraphQL queries for dynamic content loading.
5. Generate the final output files as specified in the outputs section.
"""

# Print the generated prompt
print(prompt)

