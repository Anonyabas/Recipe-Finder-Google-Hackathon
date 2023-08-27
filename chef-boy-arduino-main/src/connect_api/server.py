from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['POST'])
def get_data():
    data = request.json
    # Process data and return a response
    response = {'result': 'Processed data from Python'}
    return jsonify(response)

if __name__ == '__main__':
    app.run()
