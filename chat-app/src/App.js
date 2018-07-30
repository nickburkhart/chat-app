import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { NameContainer } from './containers/NameContainer';
import { UsersContainer } from './containers/UsersContainer';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Chat App</h1>
          </header>
          <NameContainer />
          <UsersContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
