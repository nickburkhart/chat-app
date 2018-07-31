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
					{(this.props.messages || []).map((message, i) => (
						<li key={i}>{message.from}: {message.text}</li>
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
		const { sid, name } = this.props;
		this.props.sendMessage({ to: { sid, name },  text: message });
		this.messageInput.value = '';
	}
	_setMessageInput = ref => this.messageInput = ref;
}