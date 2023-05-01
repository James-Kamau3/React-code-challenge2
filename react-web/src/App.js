import './App.css'
import BotCollection from "./components/BotCollection";
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <div>
      <h1 className='bots'>Bots</h1>
      <BotCollection />
      <YourBotArmy />
    </div>
  );
}

export default App;
