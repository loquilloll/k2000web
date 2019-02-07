# import eventlet
# eventlet.monkey_patch()
# from eventlet import wsgi
from server import socketio,app
from livereload import Server

server = Server(app.wsgi_app)
server.watch('~/flask/dash_app/static/js/*')

if __name__ == '__main__':
    # server.serve(port=80)
    # wsgi.server(eventlet.listen(('', 80)), app)
    socketio.run(app, host="0.0.0.0",port=80, use_reloader=True)
    # app.run(host="0.0.0.0",port=80, use_reloader=False)
    
