import React from 'react'

export default function PlayerCreator(props) {
  const [nameInput, setNameInput] = React.useState('')
  const [balanceInput, setBalanceInput] = React.useState(1500)

  const handleNameChange = (event) => {
    setNameInput(event.target.value)
  }

  const handleBalanceChange = (event) => {
    console.log(event.target.value)
    const reg = /^[0-9\b]+$/;
    if (event.target.value === '' || reg.test(event.target.value)) {
      setBalanceInput(event.target.value)
    }
  }

  const handleSubmit = () => {
    const newPlayer = { name: nameInput, balance: balanceInput }
    props.onNewPlayer(newPlayer)
    setNameInput('')
    setBalanceInput(1500)
  }

  return (
    <div>
      <input type="text" onChange={handleNameChange} value={nameInput} />
      <input type="number" onChange={handleBalanceChange} value={balanceInput} />
      <button onClick={handleSubmit} value="Test" />
    </div>
  )
}