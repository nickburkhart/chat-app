import { START_CHAT, MESSAGE, JOINED } from "../actions/actionTypes";

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