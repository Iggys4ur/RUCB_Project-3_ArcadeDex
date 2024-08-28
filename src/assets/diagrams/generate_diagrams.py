import json
import os
from graphviz import Digraph
from PIL import Image, ImageDraw, ImageFont

# Define paths
input_folder1 = './data-models/JSON/'
output_folder1 = './data-models/PNG/'

input_folder2 = './wireframes/JSON/'
output_folder2 = './wireframes/PNG/'

input_folder3 = './flowcharts/JSON/'
output_folder3 = './flowcharts/PNG/'

# Create output folders if not exists
os.makedirs(output_folder1, exist_ok=True)
os.makedirs(output_folder2, exist_ok=True)
os.makedirs(output_folder3, exist_ok=True)

# Function to draw a simple wireframe diagram
def generate_wireframe_diagram(json_data, output_path):
    width, height = 800, 600
    image = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(image)

    # Use a basic font
    font = ImageFont.load_default()

    # Draw components
    components = json_data.get("components", [])
    y_offset = 50
    for component in components:
        draw.rectangle([(50, y_offset), (750, y_offset + 50)], outline="black", width=2)
        draw.text((60, y_offset + 15), component["name"], fill="black", font=font)
        y_offset += 80

    image.save(output_path)

# Function to generate data model diagram using graphviz
def generate_data_model_diagram(json_data, output_path):
    dot = Digraph(comment=json_data["title"])
    fields = json_data.get("fields", {})
    dot.node(json_data["title"], shape="record", label="{ " + json_data["title"] + " | " + " | ".join(fields.keys()) + " }")
    dot.render(output_path, format="png")

# Function to generate flowchart diagram using graphviz
def generate_flowchart_diagram(json_data, output_path):
    dot = Digraph(comment=json_data["title"], format="png")
    steps = json_data.get("steps", [])
    previous_step = None

    for index, step in enumerate(steps):
        step_id = f"step{index}"
        dot.node(step_id, step, shape="box")
        if previous_step:
            dot.edge(previous_step, step_id)
        previous_step = step_id

    dot.render(output_path, format="png")

# Main function to process all json files
def process_json_files(inFolder, outFolder):
    for filename in os.listdir(inFolder):
        if filename.endswith(".json"):
            file_path = os.path.join(inFolder, filename)
            with open(file_path, "r") as json_file:
                json_data = json.load(json_file)
                output_path = os.path.join(outFolder, filename.replace(".json", ""))

                if "Wireframe" in json_data["title"]:
                    generate_wireframe_diagram(json_data, output_path + ".png")
                elif "Model" in json_data["title"]:
                    generate_data_model_diagram(json_data, output_path)
                elif "Flow Chart" in json_data["title"]:
                    generate_flowchart_diagram(json_data, output_path)

if __name__ == "__main__":
    process_json_files(input_folder1, output_folder1)
    process_json_files(input_folder2, output_folder2)
    process_json_files(input_folder3, output_folder3)
