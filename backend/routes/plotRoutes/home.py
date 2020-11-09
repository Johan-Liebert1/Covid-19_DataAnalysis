from flask import Blueprint

home_page = Blueprint('home_page', __name__)

@home_page.route('/home')
def show():
    return { "message": "Now Connected" }