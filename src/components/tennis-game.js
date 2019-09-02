import React from 'react';

// import TennisGameLogic from './tennis-game-class';
// interface Props {
//   tennisGame: TennisGameLogic;
// }

const gameSequence = ['0', '15', '30', '40', 'Adv', 'Win'];
const setSequence = [0, 1, 2, 3, 4, 5, 6, 7];
const matchSequence = [0, 1, 2, 3];

export const TennisGame = props => {
  const currentGame = props.tennisGame;

  return (
    <div className='column'>
      <div className='row'>
        <span className='bold player-name'>Name</span>
        <span className='bold player-score'>Game</span>
        <span className='bold player-score'>Set</span>
        <span className='bold player-score'>Match</span>
      </div>

      <div className='row'>
        <span className='player-name'>{currentGame.getPlayerOneName()}</span>
        <span className='player-score'>
          {gameSequence[currentGame.getPlayerOneGame()]}
        </span>
        <span className='player-score'>
          {setSequence[currentGame.getPlayerOneSet()]}
        </span>
        <span className='player-score'>
          {matchSequence[currentGame.getPlayerOneMatch()]}
        </span>
      </div>

      <div className='row'>
        <span className='player-name'>{currentGame.getPlayerTwoName()}</span>
        <span className='player-score'>
          {gameSequence[currentGame.getPlayerTwoGame()]}
        </span>
        <span className='player-score'>
          {setSequence[currentGame.getPlayerTwoSet()]}
        </span>
        <span className='player-score'>
          {matchSequence[currentGame.getPlayerTwoMatch()]}
        </span>
      </div>

      <div className='row inputs'>
        <button onClick={() => currentGame.playerOneScored()}>
          {currentGame.getPlayerOneName()}
        </button>
        <button onClick={() => currentGame.playerTwoScored()}>
          {currentGame.getPlayerTwoName()}
        </button>
      </div>
      <div>
        <p>
          <span className='winner-name'>
            {currentGame.getPreviousWinner() !== ''
              ? `Game, Set & Match to ${currentGame.getPreviousWinner()}.`
              : ''}
          </span>
        </p>
      </div>

      <div>
        <button onClick={() => currentGame.reset()}>
          Reset scores and players
        </button>
      </div>
    </div>
  );
};
export default TennisGame;
