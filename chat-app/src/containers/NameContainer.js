import { connect } from 'react-redux';
import { setName } from '../actions/setName';
import { Name } from '../components/Name';

const mapStateToProps = (state) => ({
	value: (state.clients && state.clients.current &&
		state.clients.current.name) || ''
});

const mapDispatchToProps = (dispatch) => ({
	onNameChange: setName(dispatch)
});

export const NameContainer =
	connect(mapStateToProps, mapDispatchToProps)(Name);