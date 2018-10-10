import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    username: 'the_bigdadi'
  };

  userNameChangedHandler = (event) => {
    this.setState({
      username:event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput userName={this.state.username} changed={this.userNameChangedHandler} />
        <UserOutput index='1' userName={this.state.username}/>
        <UserOutput index='2'/>
      </div>
    );
  }
}

export default App;
