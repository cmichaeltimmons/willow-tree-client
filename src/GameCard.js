import React from 'react'
import ImageCard from './ImageCard'

class GameCard extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
    this.onClick = this.onClick.bind(this)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    //if we recieve a new board id reset state
    if(prevProps.id != this.props.id)
      this.setState({selected: false})
  }

  onClick() {
    this.setState({
      selected: true
    })
  }

  render() {
    let rgba, label
    if (this.state.selected) {
      rgba = this.props.isWinner ? [0, 200, 0, .5] : [255, 0, 0, .5]
      label = this.props.label
    } else {
      rgba = [0, 0, 0, 0]
      label = null
    }
    return (
      <ImageCard
        rgba={rgba}
        src={this.props.src}
        width={this.props.width}
        height={this.props.height}
        onClick={this.onClick}
        label={label}
      >
      </ImageCard>
    )
  }
}

export default GameCard