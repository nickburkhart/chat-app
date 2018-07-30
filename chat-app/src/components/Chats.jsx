import React from 'react';
import { ChatContainer } from '../containers/ChatContainer';

export class Chats extends React.PureComponent {
	render() {
		return (
			<div>
				{(this.props.chats || []).map(chat => (
					<ChatContainer key={chat.name} {...chat} />
				))}
			</div>
		);
	}
}