import './App.css';
import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import FactsContainer from './FactsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      facts:[]

    }
  }


  componentDidMount() {
    let first = fetch("https:numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true", {
         method: 'GET',
       	 headers: {
       		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
       		'X-RapidAPI-Key': 'b3c95e178cmsh316f615af7ba61ep177928jsn56b0cfb1a7a4'
       	}
       })
       .then(response => response.json())

   let second = fetch('https:numbersapi.p.rapidapi.com/1492/year?fragment=true&json=true', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
          'X-RapidAPI-Key': 'b3c95e178cmsh316f615af7ba61ep177928jsn56b0cfb1a7a4'
        }
      })
       .then(response => response.json())

    let third = fetch('https:numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', {
          method: 'GET',
         headers: {
           'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
           'X-RapidAPI-Key': 'b3c95e178cmsh316f615af7ba61ep177928jsn56b0cfb1a7a4'
         }
        })
         .then(response => response.json())
    Promise.all([first, second, third]).then(data => this.setState({facts: data}))
  }


  render(){
    return (
      <div className="App">
        <Header />
        <FactsContainer facts={this.state.facts} />
      </div>
    )
  }
}


export default App;
