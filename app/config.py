import os
from dotenv import load_dotenv

load_dotenv()


class Config:
    # SECRET KEY
    SECRET_KEY = os.getenv("SECRET_KEY", "super-secret-key")

    # Database
    SQLALCHEMY_DATABASE_URI = os.getenv(
        "DATABASE_URL",
        "postgresql://user:password@localhost:5432/appdb"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret")