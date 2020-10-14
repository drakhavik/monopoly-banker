import React from 'react';
import './App.css';
import Player from './components/Player.js'
import PlayerCreator from './components/PlayerCreator';
import { v4 as uuidv4 } from 'uuid'



function App() {
  const [playerList, setPlayerList] = React.useState([])

  const handleNewPlayer = (newPlayer) => {
    setPlayerList([...playerList, newPlayer])
  }

  return (
    <div className="App">
      <PlayerCreator onNewPlayer={handleNewPlayer} />
      <div className="player-grid">
        {playerList[0] && playerList.map(
          (player) => <Player key={uuidv4()} name={player.name} balance={player.balance} />
        )}
      </div>
    </div>
  );
}

export default App;
