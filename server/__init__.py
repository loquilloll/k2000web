from flask import Flask
from flask_socketio import SocketIO
from flask_bootstrap import Bootstrap


app = Flask(
    __name__,
    static_folder="../static", 
    template_folder="../static"
)
app.config.update(
    DEBUG = True,
)
Bootstrap(app)
# socketio = SocketIO(app, async_mode="eventlet")
socketio = SocketIO(app)

from server import routes

