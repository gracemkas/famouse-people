import React, { Component } from 'react';
import Header from '../header/Header';
import NewStar from '../NewStar/NewStar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        starList: [{
            name: 'Sean',
            role: 'being a loser',
            popularity: 1
        }],
        star: {           
            name: '',
            role: '',
            popularity: ''
        }
    }
}

handleChangeFor = (propertyName) => (event) => {
  this.setState({
      star: {
          ...this.state.star,
          [propertyName] : event.target.value
      }
  })
}

handleClick = (event) => {
event.preventDefault();
console.log(this.state.star); 
this.setState({
  starList:  [
      ...this.state.starList,
      this.state.star
    ],
  star : {
      name: '',
      role: '',
      popularity: ''
  }
})
}

  render() {
    return (
      <div className="App">
      <Header />
        <p className="App-intro">
          These are famous people.
        </p>
        <NewStar 
          newForm={this.state.star} 
          handleChangeFor={this.handleChangeFor}
          handleClick={this.handleClick}/> 
      </div>
    );
  }
}

export default App;
