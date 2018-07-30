import { combineReducers } from 'redux';
import { chatReducer } from './chat';
import { clientsReducer } from './clients';

export default combineReducers({
	chats: chatReducer,
	clients: clientsReducer
});  