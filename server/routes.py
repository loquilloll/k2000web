from server.k2000_prime import k2000
import atexit
from flask import render_template, request
from apscheduler.schedulers.background import BackgroundScheduler
from server import app,socketio

s=BackgroundScheduler(
    deamon=True,
    job_defaults={
        'apscheduler.job_defaults.max_instances': '5'
    })
s.start()

# Shutdown your cron thread if the web process is stopped
atexit.register(lambda: s.shutdown(wait=False))

inst = k2000()

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/inst/pause',methods=['GET'])
def pause():
    if s.get_job('send_read') is not None:
        # k.write('disp:enab 1')
        s.remove_job('send_read')
    return ''

@app.route('/inst/start',methods=['GET'])
def start():
    if s.get_job('send_read') is None:
        # k.write('disp:enab 0')
        s.add_job(send_read, 'interval', seconds=.1, id='send_read')
    return ''

@app.route('/inst/<mode>/<mode2>',methods=['GET'])
def mode(mode, mode2):
    inst.config(mode, ":" + mode2)
    return ''

@app.route('/inst/<mode>',methods=['GET'])
def mode2(mode):
    inst.config(mode)
    return ''


@socketio.on('voltageio')
def volageio():
    reading = inst.read()
    socketio.emit('voltage', {'voltage': reading})
    # print(reading)

def send_read():
    # reading = inst.read()
    socketio.emit('voltage', {'voltage': inst.read()})
    # print('hit')
# s.add_job(send_read, 'interval', seconds=.1, id='send_read')



@socketio.on_error_default
def default_error_handler(e):
    print(request.event["message"]) # "my error event"
    print(request.event["args"])    # (data,)




# k.write('disp:enab 1')


