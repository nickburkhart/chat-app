import { sendChat } from "../chat";
import { MESSAGE } from "./actionTypes";

export function sendMessage(dispatch) {
	return ({ from, to, text}) => {
		dispatch({ type: MESSAGE, from, to, text });
		sendChat(from, to, text);
	};
}