import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import GameBoard from './GameBoard'
import { SizeMe } from 'react-sizeme'

class App extends Component {

  constructor() {
    super()
    this.state = {}
    this.newGame = this.newGame.bind(this)
  }
  async componentDidMount() {
    const response = await axios.get('https://wta-namegame.herokuapp.com/api/game')
    this.setState({
      people: response.data.people
    })
    this.newGame()
  }

  newGame() {
    //select 5 random, distinct indexes 
    //the indexes are used to select people for new game board
    const randomNums = new Set()
    while (randomNums.size < 5) {
      randomNums.add(Math.floor(Math.random() * this.state.people.length))
    }
    const selectedIndexes = Array.from(randomNums)
    
    //map selected indexes to people 
    const selectedPeople = selectedIndexes.map(newIndex => {
      const name = this.state.people[newIndex].firstName + ' ' + this.state.people[newIndex].lastName
      const url = this.state.people[newIndex].headshot.url
      return ({
        name,
        url
      })
    })

    //create board id using epoch time
    const theDate = new Date();
    const id = theDate.getTime();

    this.setState({
      board: {
        people: selectedPeople,
        winningIndex: Math.floor(Math.random() * 5),
        id
      }
    })
  }

  render() {
    const { board } = this.state
    return (
      <div className="App">
            <button onClick={this.newGame}>Play</button>
            {board && <GameBoard board={board}/>}
      </div>
    )
  }
}

export default App;
