import { START_CHAT } from "./actionTypes";

export function startChat(dispatch) {
	return client => {
		dispatch({ type: START_CHAT, client });
	};
}