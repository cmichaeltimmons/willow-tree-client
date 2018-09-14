import React from 'react'
import GameCard from './GameCard'
import { withSize } from 'react-sizeme'
import PropTypes from 'prop-types'


const containerStyle = {
  width: "100%",
  height: '400px',
  display: 'flex',
  flexDirection: 'row'
}

const questionStyle = {
  width: '100%',
  fontSize: '24px',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 24,
  fontFamily: 'Open Sans'
}

const GameBoard = ({ size, board }) => (
  <div>
    <h1 style={questionStyle}>Who is {board.people[board.winningIndex].name}?</h1>
    <div style={containerStyle}>
      {
        board.people.map((person, i) => (
          <GameCard
            id={board.id}
            isWinner={i === board.winningIndex}
            src={person.url}
            width={size.width / 5}
            height={size.width / 5}
            label={person.name}
          />
        ))
      }
    </div>
  </div>
)

GameBoard.PropTypes = {
  size: PropTypes.object.isRequired,
  board: PropTypes.object
}

export default withSize()(GameBoard)