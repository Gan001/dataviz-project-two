from sqlalchemy import create_engine
from config import password
import pymysql
pymysql.install_as_MySQLdb()
import pandas as pd

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")
def index():
    #Return to Home
    return('index.html')











if __name__ == "__main__":
    app.run()