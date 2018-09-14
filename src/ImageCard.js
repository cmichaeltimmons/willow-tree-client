import React from 'react'
import PropTypes from 'prop-types'

const styles = ({
  src,
  rgba,
  width,
  height
}) => ({
    div: {
      height: height,
      width: width,
      padding: '0px 5px 0px 5px',
      display: 'flex'
    },
    span: {
      backgroundColor: `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`,
      position: 'absolute',
      height: height,
      width: width,
      color: 'white',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
    img: {
      width: '100%'
    }
  })

const ImageCard = props => (
  <div onClick={props.onClick} style={styles(props).div}>
    <img src={props.src} style={styles(props).img}></img>
    <span style={styles(props).span}>
      <h2>{props.label}</h2>
    </span>
  </div>
)

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  rgba: PropTypes.array.isRequired
}

export default ImageCard