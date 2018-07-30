import { combineReducers } from 'redux';
import { clientsReducer } from './clients';

export default combineReducers({
	clients: clientsReducer
});  