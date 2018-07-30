import { applyMiddleware, createStore, compose } from 'redux';
import reducers from './reducers';
import { listen, joinChat, init } from './chat';

const STORAGE_KEY = 'CHAT_APP';

const initialState = () => {
	const storedState = localStorage.getItem(STORAGE_KEY);
	if (storedState) {
		try {
			return JSON.parse(storedState);
		} catch (e) {
			// fall through to default initial state
		}
	}
	return { };
}

const storageMiddleware = ({ getState }) => next => action => {
	next(action);
	localStorage.setItem(STORAGE_KEY, JSON.stringify(getState()));
	return action;
}

const middleware = [
	storageMiddleware
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const state = initialState();
const store = createStore(
	reducers,
	state,
	composeEnhancers(applyMiddleware(...middleware))
);
init()
	.then(() => {
		listen(store.dispatch);
		if (state.clients && state.clients.current && state.clients.current.name) {
			joinChat(state.clients.current.name);
		}
	});
export default store;