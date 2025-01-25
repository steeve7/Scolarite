from . import db
from sqlalchemy import Column, Integer, String, create_engine, MetaData, Table

class TXModel(db.Model):
    id = Column(Integer,primary_key=True)
    modelName = Column(String(150))