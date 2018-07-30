import React from 'react';

export class Chat extends React.PureComponent {
	render() {
		return (
			<div>
				<label>{this.props.name}</label>
				<button type="button" onClick={this._closeChat}>
					close
				</button>
				<ol>
					{(this.props.messages || []).map(message => (
						<li>{message.from}: {message.text}</li>
					))}
				</ol>
				<label htmlFor={`message${this.props.name}`}>Message:</label>
				<input type="text" ref={this._setMessageInput} />
				<button type="button" onClick={this._sendMessage}>
					send
				</button>
			</div>
		);
	}
	_closeChat = () => {
		this.props.closeChat(this.props.name);
	}
	_sendMessage = () => {
		const message = this.messageInput.value;
		console.log('sending message', message, this.props.name, this.props.sid);
		this.messageInput.value = '';
	}
	_setMessageInput = ref => this.messageInput = ref;
}