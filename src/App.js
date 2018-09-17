import React, { Component } from 'react';
import axios from 'axios'
import GameBoard from './GameBoard'
import { newBoard } from './api'

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
    this.setState({
      board: newBoard(this.state.people)
    })
  }

  render() {
    const { board } = this.state
    return (
      <div className="App">
        <button onClick={this.newGame}>Play</button>
        {board && <GameBoard board={board} />}
      </div>
    )
  }
}

export default App;
