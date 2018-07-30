from flask import Flask, request
from flask_socketio import SocketIO, emit
    
app = Flask(__name__)
socketio = SocketIO(app)

@socketio.on('disconnect')
def disconnect():
    emit('left', { 'sid': request.sid }, broadcast=True)

@socketio.on('JOINED')
def joined(name):
		emit('JOINED', {'name': name, 'sid': request.sid}, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)