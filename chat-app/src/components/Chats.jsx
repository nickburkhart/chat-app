import React from 'react';
import { Chat } from './Chat';

export class Chats extends React.PureComponent {
	render() {
		return (
			<div>
				{(this.props.chats || []).map(chat => (
					<Chat key={chat.name} {...chat} />
				))}
			</div>
		);
	}
}