import React, { useState, useEffect } from 'react';
import '../App.css'

function BotsCollection() {
  const [bots, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(bots => setData(bots))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="bots-collection">
      {bots.map(bot => <div className = 'each' key={bot.id} bot={bot} >
        <ul>
            <h5 className='label'>Name: </h5>
            <li>
                {bot.name}
            </li>
            <h5 className='label'>Health: </h5>
            <li>
                {bot.health}
            </li>
            <h5 className='label'>Damage: </h5>
            <li>
                {bot.damage}
            </li>
            <h5 className='label'>Armor: </h5>
            <li>
                {bot.armor}
            </li>
            <h5 className='label'>Bot_Class: </h5>
            <li>
                {bot.bot_class}
            </li>
            <h5 className='label'>Catchphtase: </h5>
            <li>
                {bot.catchphrase}
            </li>
            <h5 className='label'>Avatar_Image: </h5>
            <li>
                <img src={bot.avatar_url} alt='avatar'/>
            </li>
            <h5 className='label'>Created_At: </h5>
            <li>
                {bot.created_at}
            </li>
            <h5 className='label'>Updated_At: </h5>
            <li>
                {bot.updated_at}
            </li>
        </ul>
      </div>)}
    </div>
  );
}

export default BotsCollection;

