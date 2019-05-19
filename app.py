from sqlalchemy import create_engine
from config import password
import pymysql
pymysql.install_as_MySQLdb()
import pandas as pd

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
#Connect to local database
rds_connection_string = f"root:{password}@localhost/services_311_db"
engine = create_engine(f'mysql://{rds_connection_string}')

@app.route("/")
def index():
    #Return to Home
    return render_template('index.html')

@app.route("/services")
def service():
    service = pd.read_sql_query('select * from requests_311', con=engine).head()
    return jsonify(list(service.columns))











if __name__ == "__main__":
    app.run()