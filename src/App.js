import React from 'react';
import './App.css';
import TennisGame from './components/tennis-game';
import TennisGameLogic from './components/tennis-game-class';

function App() {
  return (
    <div className='tennis-game-app'>
      <header className='ScoreBoard'>
        <h1>Tennis-Game-Kata (Court-1)</h1>
        <TennisGame
          tennisGame={
            new TennisGameLogic({ playerOne: 'Nadal', playerTwo: 'Federer' })
          }
        />
        <hr></hr>
        <h1>Tennis-Game-Kata (Court-2)</h1>
        <TennisGame
          tennisGame={
            new TennisGameLogic({ playerOne: 'Serena', playerTwo: 'Venus' })
          }
        />
      </header>
    </div>
  );
}

export default App;
