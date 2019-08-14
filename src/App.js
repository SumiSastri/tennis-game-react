import React from 'react';
import './App.css';
import TennisGame from './components/tennis-game';

function App() {
  return (
    <div className='tennis-game-app'>
      <header className='ScoreBoard'>
        <h1>Tennis-Game-Kata</h1>
        <TennisGame playerOne='Nadal' playerTwo='Federer' />
      </header>
    </div>
  );
}

export default App;
