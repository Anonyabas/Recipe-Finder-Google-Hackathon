from flask import Flask, request, jsonify
from flask_cors import CORS

<strong >  # Set up Flask</strong>:
app = Flask(__name__)
<strong >  # Set up Flask to bypass CORS at the front end:</strong>
cors = CORS(app)

<strong >  # Run the app</strong>:
if __name__ == "__main__":
    app.run()
