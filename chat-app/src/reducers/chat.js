import { START_CHAT, MESSAGE, JOINED, CLOSE_CHAT } from "../actions/actionTypes";

const closeChat = (store, name) => {
	return (store || []).map(chat => {
		if (chat.name === name) {
			return { ...chat, open: false };
		}
		return chat;
	});
};

const openChat = (store, client) => {
	let exists = false;
	const newChats = (store|| [])
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

const message = (store, {from, to, text}) => {
	let found = false;
	let newStore = (store || []).map(chat => {
		if (chat.sid === to.sid || chat.name === from.name) {
			found = true;
			const newMessages = [...(chat.messages || []), { from: from.name, text }];
			return { ...chat, messages: newMessages };
		}
		return chat;
	});
	if (!found) {
		newStore.push({
			...from,
			open: true,
			messages: [ { from: from.name, text }]
		});
	}
	return newStore;
};

const updateChatSids = (store, { name, sid }) => {
	return (store || []).map(chat => {
		if (chat.name === name) {
			return { ...chat, sid };
		}
		return chat;
	});
};

export function chatReducer(store = [], action) {
	switch (action.type) {
		case CLOSE_CHAT:
			return closeChat(store, action.name);
		case JOINED:
			return updateChatSids(store, action);
		case START_CHAT:
			return openChat(store, action.client);
		case MESSAGE:
			return message(store, action);
		default:
			return store;
	}
}