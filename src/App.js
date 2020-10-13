import React from 'react';
import './App.css';
import Player from './components/Player.js'
import PlayerCreator from './components/PlayerCreator';

function App() {
  const [playerList, setPlayerList] = React.useState([{ name: 'test', balance: 1500 }])

  const handleNewPlayer = (newPlayer) => {
    setPlayerList([...playerList, newPlayer])
  }

  return (
    <div className="App">
      <PlayerCreator onNewPlayer={handleNewPlayer} />
      <div className="container player-list">
        <ul>
          {playerList.map((player) => <Player name={player.name} balance={player.balance} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
