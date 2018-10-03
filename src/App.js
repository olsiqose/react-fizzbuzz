import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop: 50}}>
          <Form/>
        </div>
      </div>
    );
  }
}

export default App;
