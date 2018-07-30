import { START_CHAT } from "../actions/actionTypes";

const openChat = (store, client) => {
	let exists = false;
	const newChats = (store.chats || [])
		.map(chat => {
			if (chat.name === client.name) {
				exists = true;
				return {
					...chat,
					sid: client.sid,
					open: true
				};
			}
			return chat;
		});
	if (!exists) {
		newChats.push({
			...client,
			open: true
		});
	}
	return newChats;
};

export function chatReducer(store = [], action) {
	switch (action.type) {
		case START_CHAT:
			return openChat(store, action.client);
		default:
			return store;
	}
}