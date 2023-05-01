import React, { useState, useEffect } from 'react';
import EachBot from './EachBot';
import '../App.css'

function BotsCollection({ enlistedBots, setEnlistedBots }){
  const [bots, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(bots => setData(bots))
      .catch(error => console.error(error));
  }, []);

  function enlistBot(bot) {
    if (!enlistedBots.includes(bot)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  }

  return (
    <div className="bots-collection">
      {bots.map(bot => <EachBot onClick={() => enlistBot(bot)} bot={bot} key={bot.id} />)}
    </div>
  );
}

export default BotsCollection;

