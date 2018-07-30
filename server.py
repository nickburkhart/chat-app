from flask import Flask, request, send_from_directory
from flask_socketio import SocketIO, emit
import os
    
app = Flask(__name__, static_folder='chat-app/build')
socketio = SocketIO(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
		print('path: ', path)
		if path != "" and os.path.exists("chat-app/build/" + path):
				return send_from_directory('chat-app/build', path)
		else:
				return send_from_directory('chat-app/build', 'index.html')
				
@socketio.on('disconnect')
def disconnect():
    emit('left', { 'sid': request.sid }, broadcast=True)

@socketio.on('JOINED')
def joined(name):
		emit('JOINED', {'name': name, 'sid': request.sid}, broadcast=True)

@socketio.on('CHANGE_NAME')
def change_name(oldName, newName):
	emit('CHANGE_NAME', {'old': oldName, 'new': newName}, broadcast=True)

if __name__ == '__main__':
    socketio.run(app)