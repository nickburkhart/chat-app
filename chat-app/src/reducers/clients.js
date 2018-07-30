import { JOINED, SET_NAME } from '../actions/actionTypes';

const INITIAL_STATE = {
	current: { name: '' },
	clients: []
};

const addNewClient = (store, action) => {
	const { name, sid } = action;
	const newClients = (store.clients || []).concat({ name, sid });
	return { ...store, clients: newClients };
};

const updateClientName = (store, action) => ({
	...store,
	clients: store.clients.map(client => {
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
				updateCurrentName(store, action.newName);
			} else {
				updateClientName(store, action);
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