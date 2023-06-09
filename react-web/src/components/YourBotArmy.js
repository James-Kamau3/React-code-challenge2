//import React, { useEffect } from 'react';
import EachBot from './EachBot';
import '../App.css'

function YourBotArmy({ listedBots, setListedBots}) {

  function deleteBot(bot) {
    const removedBots = listedBots.filter((listedBot) => listedBot.id !== bot.id);
    setListedBots(removedBots);
  }


    return (
      <div className="bots-collection">
        <h1 className='bots'>My Bot Army</h1>
        {listedBots.map(bot => <EachBot bot={bot} key={bot.id} onClick={() => deleteBot(bot)} />)}
        
      </div>
    );
  }
  


export default YourBotArmy;



