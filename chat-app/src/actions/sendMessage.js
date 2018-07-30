import { sendChat } from "../chat";

export function sendMessage(dispatch) {
	return ({ from, to, text}) => {
		console.log('sending', from, to, text);
		sendChat(from, to.sid, text);
	};
}