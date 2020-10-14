import React from 'react'

export default function PlayerCreator(props) {
  const [nameInput, setNameInput] = React.useState(``)
  const [balanceInput, setBalanceInput] = React.useState(1500)

  const handleNameChange = (event) => setNameInput(event.target.value)

  const handleBalanceChange = (event) => setBalanceInput(event.target.value)

  const handleSubmit = () => {
    const name = nameInput === '' ? 'Default' : nameInput
    const newPlayer = { name: name, balance: balanceInput }
    props.onNewPlayer(newPlayer)
    setNameInput('Default')
    setBalanceInput(1500)
  }

  return (
    <div className="player-creator">
      <input type="text" placeholder="Default" onChange={handleNameChange} value={nameInput} />
      <input type="number" onChange={handleBalanceChange} value={balanceInput} />
      <button onClick={handleSubmit}>Add Player</button>
    </div>
  )
}