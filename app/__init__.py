from flask import Flask
from .extensions import db, migrate
from .config import Config
#from .modules.auth import routes as auth_routes
from .modules.users import routes as users_routes

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Инициализация расширений
    db.init_app(app)
    migrate.init_app(app, db)

    # Регистрация модулей (blueprints)
    #app.register_blueprint(auth_routes.bp, url_prefix='/auth')
    app.register_blueprint(users_routes.bp, url_prefix='/users')

    return app