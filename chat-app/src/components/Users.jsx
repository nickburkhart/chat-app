import React from 'react';

export class Users extends React.PureComponent {
	render() {
		return (
			<form>
				<label htmlFor="users">Start a Conversation:</label>
				<select id="users" ref={this._setUsers}>
					{(this.props.users || []).map(user => (
						<option key={user.name} value={user.sid}>
							{user.name}
						</option>
					))}
				</select>
				<button onClick={this._handleChat}>
					Chat
				</button>
			</form>
		);
	}
	_handleChat = () => {
		debugger;
	}
	_setUsers = (ref) => this.users = ref;
}