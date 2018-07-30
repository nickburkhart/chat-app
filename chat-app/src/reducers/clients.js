import { JOINED, SET_NAME } from '../actions/actionTypes';

const INITIAL_STATE = {
	current: { name: '' },
	clients: []
};

export function clientsReducer(store = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_NAME:
			return { ...store, current: { ...store.current, name: action.name }};
		case JOINED:
			if (store.current.name === action.name) {
				return { 
					...store,
					current: { ...store.current, sid: action.sid }
				};
			} else {
				const { name, sid } = action;
				const newClients = (store.clients || []).concat({ name, sid });
				return { ...store, clients: newClients };
			}
		default:
			return store;
	}
}