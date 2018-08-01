import React from 'react';
import { CloseButton } from './CloseButton';

export class Chat extends React.PureComponent {
	render() {
		return (
			<div className='chat-section'>
				<div className='chat-header'>
					<label>{this.props.name}</label>
					<div className='chat-close'>
						<CloseButton onClick={this._closeChat} />
					</div>
				</div>
				<ol className='messages'>
					{(this.props.messages || []).map((message, i) => {
						return (
							<li className='message' key={i}>
								<span className='message-from'>{message.from}:</span>
								<span> {message.text}</span>
							</li>
						);
					})}
				</ol>
				<div className='message-new'>
					<input
						aria-label='message'
						className='message-new-input'
						type="text"
						ref={this._setMessageInput}
					/>
					<button className="action-text" type="button" onClick={this._sendMessage}>
						Send
					</button>
				</div>
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