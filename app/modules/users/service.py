from .models import User
from app.extensions import db

def get_all_users():
    return [u.to_dict() for u in User.query.all()]

def create_user(data):
    user = User(name=data["name"], email=data["email"])
    db.session.add(user)
    db.session.commit()
    return user.to_dict()