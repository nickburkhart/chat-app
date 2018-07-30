import { connect } from 'react-redux';
import { sendMessage } from '../actions/sendMessage';
import { Chat } from '../components/Chat';

const mapStateToProps = state => ({
	user: state.clients.current
});

const mapDispatchToProps = dispatch => ({
	sendMessage: sendMessage(dispatch)
});

const mergeProps = (storeProps, dispatchProps, ownProps) => ({
	...ownProps,
	sendMessage: ({sid, text}) => dispatchProps.sendMessage({
		from: storeProps.user.name,
		to: sid,
		text
	})
});

export const ChatContainer =
	connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);