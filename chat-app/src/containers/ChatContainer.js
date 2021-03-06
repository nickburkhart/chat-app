import { connect } from 'react-redux';
import { closeChat } from '../actions/closeChat';
import { sendMessage } from '../actions/sendMessage';
import { Chat } from '../components/Chat';

const mapStateToProps = state => ({
	user: state.clients.current
});

const mapDispatchToProps = dispatch => ({
	closeChat: closeChat(dispatch),
	sendMessage: sendMessage(dispatch)
});

const mergeProps = (storeProps, dispatchProps, ownProps) => ({
	...ownProps,
	closeChat: dispatchProps.closeChat,
	sendMessage: ({to, text}) => dispatchProps.sendMessage({
		from: storeProps.user,
		to,
		text
	})
});

export const ChatContainer =
	connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);