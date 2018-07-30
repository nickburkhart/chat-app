import { SET_NAME } from "./actionTypes";
import { joinChat, changeName } from "../chat";

export function setName(dispatch) {
	return (oldName, newName) => {
		if (!oldName) {
			joinChat(newName);
		} else {
			changeName(oldName, newName);
		}
		dispatch({ type: SET_NAME, name: newName });
	}
}