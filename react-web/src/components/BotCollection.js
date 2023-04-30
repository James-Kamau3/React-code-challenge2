import React, { useEffect, useState } from 'react'

function BotCollection() {

    const [bots, setBots] = useState([]);

    useEffect = (() => {
    fetch('http://localhost:8001/bots')
    .then(response => response.json())
    .then(data => setBots(data))
    .catch(error => console.log(error));
    }, []);
    
  return (
    <div className='bots-collection' >
        {bots.map(bot => <div key = {bot.id}>
            <ul>
                <li>
                    {bot.name}
                </li>
                <li>
                    {bot.health}
                </li>

            </ul>
        </div>)}
    </div>
    

  )
}

export default BotCollection;
