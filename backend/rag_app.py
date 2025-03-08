# app.py
from flask import Flask, request, jsonify
import os
import google.generativeai as genai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Retrieve or set the API key for Google Gemini
api_key = os.getenv("API_KEY")
if not api_key:
    os.environ["API_KEY"] = "AIzaSyDRyMUFTYVu3NainVaxwqP-TdcNBy9Vjf0"
    api_key = os.getenv("API_KEY")

# Configure the Google Generative AI
genai.configure(api_key=api_key)

# Define a system instruction for the Gemini model
system_instruction = "you are an ai recommendation chat bot for the user"

# Create a GenerativeModel instance using Gemini
model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    system_instruction=system_instruction
)

@app.route("/api/ai-recommendations", methods=["POST"])
def generate_recommendations():
    """
    Expects a JSON POST with the structure:
    {
       "user": { ... hardcoded user data ... }
    }
    Calls the Gemini API to retrieve AI recommendations based on the user data.
    """
    data = request.get_json()
    user_details = data.get("user", {})

    # Formulate the message with the hardcoded user data
    message = f"The user's data is as follows: {user_details}. Based on this information, please provide personalized recommendations."

    # Start a chat conversation with the Gemini model
    chat = model.start_chat(
        history=[
            {"role": "user", "parts": "Hello"},
            {"role": "model", "parts": "Great to meet you. What would you like to know?"}
        ]
    )

    # Send the message and get the recommendation
    response = chat.send_message(message)

    # Return the recommendation text as JSON
    return jsonify({"text": response.text})

if __name__ == '__main__':
    # Run the Flask app on port 5002
    app.run(port=5002, debug=True)
