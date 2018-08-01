import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ChatsContainer } from './containers/ChatsContainer';
import { NameContainer } from './containers/NameContainer';
import { UsersContainer } from './containers/UsersContainer';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className="App-title">Chat App</h1>
          <div className="App-input">
            <NameContainer />
            <UsersContainer />
          </div>
          <ChatsContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
