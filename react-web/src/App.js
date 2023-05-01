import React from 'react'
import BotsCollection from './components/BotCollection'
import YourBotArmy from './components/YourBotArmy'
import {useState} from 'react';

function App() {
  const [listedBots, setListedBots] = useState([]);
  return (
    <div>
      <h1 className='bots'>Bots</h1>
      <BotsCollection listedBots={listedBots} setListedBots={setListedBots} />
      <YourBotArmy listedBots={listedBots} setListedBots={setListedBots} />
      
    </div>
  )
}

export default App


