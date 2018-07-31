import io from 'socket.io-client';
import { JOINED, CHANGE_NAME, MESSAGE } from './actions/actionTypes';

let socket = null;

export function init() {
	socket = io(process.env.CHAT_API || 'http://localhost:5000');
	return new Promise(resolve => {
		socket.on('connect', () => {
			console.log('connect');
			resolve();
		});
	});
}

export function changeName(oldName, newName) {
	socket.emit(CHANGE_NAME, { old: oldName, new: newName });
}

export function joinChat(name) {
	console.log('join', name);
	socket.emit(JOINED, name);
}

export function listen(dispatch) {
	console.log('listen');
	[ JOINED, CHANGE_NAME, MESSAGE ].forEach(eventName => {
		socket.on(eventName, (event) => {
			console.log('event', eventName);
			dispatch({ type: eventName, ...event });
		});
	});
}

export function sendChat(from, sid, message) {
	socket.emit(MESSAGE, from, sid, message);
}


