import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
from flask import Flask,request,render_template,jsonify
from flask_bootstrap import Bootstrap

import pyvisa
rm = pyvisa.ResourceManager()
k = rm.open_resource("ASRL/dev/ttyUSB0::INSTR", baud_rate = 19200)
k.baud_rate= 19200
k.data_bits=8
k.stop_bits = pyvisa.constants.StopBits.one
k.parity = pyvisa.constants.Parity.none
k.read_termination = '\r'

def create_app():
    app = Flask("my app", static_folder="../static/dist", template_folder="../static")
    app.config.update(
        DEBUG = True
    )
    Bootstrap(app)

    return app

server = create_app()

app2 = dash.Dash(name='place1', sharing=True, server=server, url_base_pathname='/test1/')
app2.layout = html.Div([
        html.H1('This is a test1')
    ])

app3 = dash.Dash(name='place2', sharing=True, server=server, url_base_pathname='/test2/')

app3.layout = html.Div([
        html.H1('This is test2')
    ])

@server.route('/')
def hello_world():
    return render_template('index.html')

@server.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return render_template('login.html')

@server.route('/voltage', methods=['GET'])
def voltage():
    voltage = k.query('meas:volt?')
    return jsonify({'voltage': voltage})

server.run(port=80, host='0.0.0.0')
