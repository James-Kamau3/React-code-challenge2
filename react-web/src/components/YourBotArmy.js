import React from 'react';
import EachBot from './EachBot';
import '../App.css'

function YourBotArmy({ listedBots}) {


    return (
      <div className="bots-collection">
        <h2 className='bots'>Your Bot Army</h2>
        {listedBots.map(bot => <EachBot bot={bot} key={bot.id} />)}
      </div>
    );
  }
  


export default YourBotArmy;



