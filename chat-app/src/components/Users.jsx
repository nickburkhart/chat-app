import React from 'react';

export class Users extends React.PureComponent {
	render() {
		return (
			<div>
				<label htmlFor="users">Start a Conversation:</label>
				<select id="users" ref={this._setUsers}>
					{(this.props.users || []).map(user => (
						<option key={user.name} value={user.sid}>
							{user.name}
						</option>
					))}
				</select>
				<button type="button" onClick={this._handleChat}>
					Chat
				</button>
			</div>
		);
	}
	_handleChat = () => {
		const sid = this.users.value;
		const name = this.users.options[this.users.selectedIndex].text;
		this.props.startChat({ name, sid });
	}
	_setUsers = (ref) => this.users = ref;
}