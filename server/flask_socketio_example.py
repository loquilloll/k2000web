from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__, template_folder="./")
app.config['SECRET_KEY'] = 'secret!'
# socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

# @socketio.on('my event')
# def test_message(message):
    # emit('my response', {'data': 'got it!'})

# if __name__ == '__main__':
    # socketio.run(app)
if __name__ == '__main__':
    app.run(host="0.0.0.0",port="80")
