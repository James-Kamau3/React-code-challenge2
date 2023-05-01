import React, { useState, useEffect } from 'react';
import EachBot from './EachBot';
import '../App.css'

function BotsCollection({ enlistedBots, enlistBot }) {
  const [bots, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(bots => setData(bots))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bots-collection">
      {bots.map(bot => <EachBot bot={bot} key={bot.id} enlistBot={enlistBot} />)}
    </div>
  );
}

export default BotsCollection;

