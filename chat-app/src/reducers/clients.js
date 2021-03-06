import { CHANGE_NAME, JOINED, SET_NAME } from '../actions/actionTypes';

const INITIAL_STATE = {
	current: { name: '' },
	users: []
};

const addNewClient = (store, action) => {
	const { name, sid } = action;
	let exists = false;

	const newClients = (store.users || [])
		.map(user => {
			if (user.name === name) {
				exists = true;
				return { ...user, name, sid };
			}
			return user;
		});
	if (!exists) {
		newClients.push({ name, sid });
	}
	return { ...store, users: newClients };
};

const updateClientName = (store, action) => ({
	...store,
	users: store.users.map(client => {
		if (client.name === action.oldName) {
			return { ...client, name: action.newName };
		}
		return client;
	})
});

const updateCurrentName = (store, name) => ({
	...store,
	current: { ...store.current, name }
});

const updateCurrentSid = (store, action) => ({
	...store,
	current: { ...store.current, sid: action.sid }
});

export function clientsReducer(store = INITIAL_STATE, action) {
	switch (action.type) {
		case CHANGE_NAME:
			if (store.current.name === action.oldName) {
				return updateCurrentName(store, action.newName);
			} else {
				return updateClientName(store, action);
			}
		case SET_NAME:
			return updateCurrentName(store, action.name);
		case JOINED:
			if (store.current.name === action.name) {
				return updateCurrentSid(store, action);
			} else {
				return addNewClient(store, action);
			}
		default:
			return store;
	}
}