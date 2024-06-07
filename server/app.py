from flask import Flask, render_template, request, jsonify
import requests
import os
import base64
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
API_BASE_URL = 'https://api-ce.kroger.com/v1'
REDIRECT_URL= 'http://localhost:3000/callback'
TOKEN_URL = 'https://api-ce.kroger.com/v1/connect/oauth2/token'
PRODUCT_API_URL = 'https://api-ce.kroger.com/v1/products'

def get_token():
    auth_str = f"{CLIENT_ID}:{CLIENT_SECRET}"
    auth_b64 = base64.b64encode(auth_str.encode('utf-8')).decode('utf-8')
    headers = {
        'Authorization': f'Basic {auth_b64}',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    data = {
        'grant_type': 'client_credentials',
        'scope': 'product.compact'
    }
    try:
        response = requests.post(TOKEN_URL, headers=headers, data=data)
        response.raise_for_status()
        token_response = response.json()
        return token_response.get('access_token')
    except requests.exceptions.HTTPError as err:
        print(f"HTTP error occurred: {err}")
        print(f"Response: {response.text}")
    except Exception as err:
        print(f"Other error occurred: {err}")
    return None

@app.route('/search', methods=['POST'])
def search():
    keyword = request.form['keyword']
    token = get_token()
    if not token:
        return jsonify({'error': 'Failed to retrieve access token'}), 500
    headers = {'Authorization': f'Bearer {token}', 'Content-Type': 'application/x-www-form-urlencoded'}
    params = {'filter.term': keyword, "filter.limit": 10}
    response = requests.get(PRODUCT_API_URL, headers=headers, params=params)
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
