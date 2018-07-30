import { START_CHAT } from "../actions/actionTypes";

const openChat = (store, client) => {
	let exists = false;
	const newChats = Object.keys(store.chats || {})
		.reduce((chatDict, name) => {
			if (name === client.name) {
				chatDict[name] = {
					...store.chats[name],
					sid: client.sid,
					open: true
				};
				exists = true;
			} else {
				chatDict = store.chats[name];
			}
			return chatDict;
		}, {});
	if (!exists) {
		newChats[client.name] = {
			...client,
			open: true
		};
	}
	return { ...store, chats: newChats };
};

export function chatReducer(store = {}, action) {
	switch (action.type) {
		case START_CHAT:
			return openChat(store, action.client);
		default:
			return store;
	}
}