import React, { Component } from 'react';
import './App.css';
import Auth from './components/Auth'
import Users from './views/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth >
          <Users />
          </Auth>
      </div>
    );
  }
}

export default App;
