import React, { Component } from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Clock />
        </header>
      </div>
    );
  }
}

export default App;
