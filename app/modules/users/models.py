from app.extensions import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), unique=True, nullable=False)

    def to_dict(self):
        return dict(
            id=self.id,
            name=self.name,
            email=self.email
        )