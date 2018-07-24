import React, { Component } from 'react';
import Header from '../header/Header';
import Star from '../star/Star';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <p className="App-intro">
          These are famous people.
        </p>
      <Star />  
      </div>
    );
  }
}

export default App;
