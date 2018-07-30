import { connect } from 'react-redux';
import { Chats } from '../components/Chats';

const mapStateToProps = state => ({
		chats: (state.chats || []).filter(chat => chat.open)
});

export const ChatsContainer = connect(mapStateToProps)(Chats);