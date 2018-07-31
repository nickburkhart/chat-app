import { CLOSE_CHAT } from "./actionTypes";

export function closeChat(dispatch) {
	return name => {
		dispatch({ type: CLOSE_CHAT, name });
	};
}