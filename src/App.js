import './App.css';
import React, { Component }from 'react';
import Header from './Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      facts:[],

    }
  }


  render(){
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}


export default App;
