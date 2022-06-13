import './App.css';
import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import FactsContainer from './FactsContainer';
import Answer from './Answer';
import Favorite from './Favorite';

class App extends Component {
  constructor() {
    super();
    this.state = {
      facts:[],
      id: 0,
      favorites: []
    }
  }

  componentDidMount() {
    let first = fetch("https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true", {
         method: 'GET',
       	 headers: {
       		'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
       		'X-RapidAPI-Key': 'b3c95e178cmsh316f615af7ba61ep177928jsn56b0cfb1a7a4'
       	}
       })
       .then(response => response.json())

   let second = fetch('https://numbersapi.p.rapidapi.com/1492/year?fragment=true&json=true', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
          'X-RapidAPI-Key': 'b3c95e178cmsh316f615af7ba61ep177928jsn56b0cfb1a7a4'
        }
      })
       .then(response => response.json())

    let third = fetch('https://numbersapi.p.rapidapi.com/random/trivia?min=10&max=20&fragment=true&json=true', {
          method: 'GET',
         headers: {
           'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com',
           'X-RapidAPI-Key': 'b3c95e178cmsh316f615af7ba61ep177928jsn56b0cfb1a7a4'
         }
        })
         .then(response => response.json())
    Promise.all([first, second, third]).then(data => this.setState({facts: data, dateAnswer: data[0].year, yearAnswer: data[1].number, triviaAnswer: data[2].number}))

    let localFavorites = JSON.parse(window.localStorage.getItem('favorites')) || []
    this.setState({favorites: localFavorites})
  }

 addToFavorite = (data) => {
   data.id = Date.now()
    this.setState({favorites: [...this.state.favorites,data]})
    window.localStorage.setItem('favorites', JSON.stringify(this.state.favorites))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<FactsContainer facts={this.state} addToFavorite={this.addToFavorite}/>} />
          <Route path='/answer/date' element={<Answer facts={this.state} type="date"/>} />
          <Route path='/answer/year' element={<Answer facts={this.state} type="year"/>} />
          <Route path='/answer/trivia' element={<Answer facts={this.state} type="trivia"/>} />
          <Route path='/favorite' element={<Favorite favorites={this.state.favorites} />}/>
        </Routes>
      </div>
    )
  }
}


export default App;
