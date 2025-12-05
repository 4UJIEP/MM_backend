from flask import Blueprint, request, jsonify
from .service import get_all_users, create_user

bp = Blueprint('users', __name__)

@bp.get('/')
def list_users():
    return jsonify(get_all_users())

@bp.post('/')
def add_user():
    data = request.get_json()
    user = create_user(data)
    return jsonify(user), 201