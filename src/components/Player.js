import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

export default function Player(props) {
  const [balance, setBalance] = React.useState(props.startBalance)
  const name = props.name
  const denominations = [1, 5, 10, 20, 50, 100, 500]

  return (
    <div className="player-card">
      <h1>{name}</h1>
      <h2>{balance}</h2>
      <div className="balance-grid">
        <div className="balance-row">
          {denominations.map((amount) =>
            <button
              className="balance-button add"
              key={uuidv4()}
              onClick={() => setBalance((balance) => balance + amount)}
            >
              {amount}
            </button>)
          }
        </div>
        <div className="balance-row">
          {denominations.map((amount) =>
            <button
              className="balance-button subtract"
              key={uuidv4()}
              onClick={() => setBalance((balance) => balance - amount)}
            >
              {amount}
            </button>)}
        </div>
      </div>
    </div>
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