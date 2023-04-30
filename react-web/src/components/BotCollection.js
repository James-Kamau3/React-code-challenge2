import React, { useState, useEffect } from 'react';
//import BotCard from './BotCard';

function BotsCollection() {
  const [botsData, setBotsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBotsData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bots-collection">
      {botsData.map(bot => <div key={bot.id} bot={bot} >
        <ul>
            <li>
                {bot.name}
            </li>
            <li>
                {bot.health}
            </li>
            <li>
                {bot.damage}
            </li>
            <li>
                {bot.armor}
            </li>
            <li>
                {bot.bot_class}
            </li>
            <li>
                {bot.catchphrase}
            </li>
            <li>
                <img src={bot.avatar_url} alt='avatar'/>
            </li>
            <li>
                {bot.created_at}
            </li>
            <li>
                {bot.updated_at}
            </li>
        </ul>
      </div>)}
    </div>
  );
}

export default BotsCollection;

