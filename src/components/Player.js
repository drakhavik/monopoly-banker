import React from 'react'
import PropTypes from 'prop-types'

export default function Player(props) {
  const [balance, setBalance] = React.useState(props.startBalance)
  const name = props.name

  return (
    <li>
      <div className="container column player">
        <h1>{name}</h1>
        <h4>{balance}</h4>
      </div>
    </li>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  balance: PropTypes.number
}

Player.defaultProps = {
  name: 'default',
  startBalance: 1500
}