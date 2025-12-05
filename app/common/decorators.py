from functools import wraps
from flask import request, jsonify

def auth_required(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Authorization")
        if not token:
            return jsonify({"error": "Unauthorized"}), 401
        # проверка токена...
        return f(*args, **kwargs)
    return wrapper