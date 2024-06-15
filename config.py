import os


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'dce20c1d14f908e8b04ad6d26c628959')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///todo.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False