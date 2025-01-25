from flask import Flask , request , jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
from .Logger import Printer

print = Printer(__name__).print
origins = [
    "*",
    "http://localhost:3000",
]

app = Flask(__name__)
db = SQLAlchemy()
DB_NAME = "database.db"

def Main():
    app.config["SECRET_KEY"] = "CDPBGNOHKGRMKBGIGMLRKNI"
    app.config["SQLALCHEMY_DATABASE_URI"] = F"sqlite:///{DB_NAME}"
    CORS(app, resources={r"/*": {"origins": origins}})


    db.init_app(app)
    Create_DB_File()

def Create_DB_File():
    findPath = "DB_find.log"
    if not os.path.exists(findPath):
        with app.app_context():
            db.create_all()
            print("DB CREATED",pipe="file",filename = findPath)
        print("DB CREATED OR CHANGED")
