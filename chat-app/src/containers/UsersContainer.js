import { connect } from 'react-redux';
import { Users } from '../components/Users';

const mapStateToProps = (store) => ({
	users: (store.clients && store.clients.users) || []
});

export const UsersContainer = connect(mapStateToProps)(Users);