import { connect } from 'react-redux';
import { Users } from '../components/Users';
import { startChat } from '../actions/startChat';

const mapStateToProps = (store) => ({
	users: (store.clients && store.clients.users) || []
});

const mapDispatchToProps = dispatch => ({
	startChat: startChat(dispatch)
});

export const UsersContainer =
	connect(mapStateToProps, mapDispatchToProps)(Users);