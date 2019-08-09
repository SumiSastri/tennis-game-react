import React, { Component } from 'react';
export class TennisGame extends Component {
  gameSequence = [0, 15, 30, 40, 50, 60];
  setSequence = [0, 1, 2, 3, 4, 5, 6, 7];
  matchSequence = [0, 1, 2, 3];

  constructor(properties) {
    super(properties);

    this.state = {
      playerOne: 'Djokovic',
      playerTwo: 'Nadal',
      playerOneGame: 0,
      playerOneSet: 0,
      playerOneMatch: 0,
      playerTwoGame: 0,
      playerTwoSet: 0,
      playerTwoMatch: 0
    };
  }
  playerOneScored() {
    this.setState({ playerOneGame: this.state.playerOneGame + 1 }, () => {
      if (
        this.hasPlayerWonMatch(
          this.matchSequence[this.state.playerOneMatch],
          this.matchSequence[this.state.playerTwoMatch]
        )
      ) {
        this.setState({
          playerOneGame: 0,
          playerTwoGame: 0,
          playerOneSet: 0,
          playerTwoSet: 0,
          playerOneMatch: 0,
          playerTwoMatch: 0
        });
      }

      if (
        this.hasPlayerWonSet(
          this.setSequence[this.state.playerOneSet],
          this.setSequence[this.state.playerTwoSet]
        )
      ) {
        this.setState({
          playerOneGame: 0,
          playerTwoGame: 0,
          playerOneSet: 0,
          playerTwoSet: 0,
          playerOneMatch: this.state.playerOneMatch + 1
        });
      }
      if (
        this.hasPlayerReachedDeuce(
          this.gameSequence[this.state.playerOneGame],
          this.gameSequence[this.state.playerTwoGame]
        )
      ) {
        this.setState({
          playerOneGame: 3,
          playerTwoGame: 3
        });
      }
      if (
        this.hasPlayerWonGame(
          this.gameSequence[this.state.playerOneGame],
          this.gameSequence[this.state.playerTwoGame]
        )
      ) {
        this.setState({
          playerOneGame: 0,
          playerTwoGame: 0,
          playerOneSet: this.state.playerOneSet + 1
        });
      }
    });
  }
  playerTwoScored() {
    this.setState({ playerTwoGame: this.state.playerTwoGame + 1 }, () => {
      if (
        this.hasPlayerWonMatch(
          this.matchSequence[this.state.playerTwoMatch],
          this.matchSequence[this.state.playerOneMatch]
        )
      ) {
        this.setState({
          playerOneGame: 0,
          playerTwoGame: 0,
          playerOneSet: 0,
          playerTwoSet: 0,
          playerOneMatch: 0,
          playerTwoMatch: 0
        });
      }

      if (
        this.hasPlayerWonSet(
          this.setSequence[this.state.playerTwoSet],
          this.setSequence[this.state.playerOneSet]
        )
      ) {
        this.setState({
          playerOneGame: 0,
          playerTwoGame: 0,
          playerOneSet: 0,
          playerTwoSet: 0,
          playerTwoMatch: this.state.playerTwoMatch + 1
        });
      }
      if (
        this.hasPlayerReachedDeuce(
          this.gameSequence[this.state.playerTwoGame],
          this.gameSequence[this.state.playerOneGame]
        )
      ) {
        this.setState({
          playerOneGame: 3,
          playerTwoGame: 3
        });
      }
      if (
        this.hasPlayerWonGame(
          this.gameSequence[this.state.playerTwoGame],
          this.gameSequence[this.state.playerOneGame]
        )
      ) {
        this.setState({
          playerOneGame: 0,
          playerTwoGame: 0,
          playerTwoSet: this.state.playerTwoSet + 1
        });
      }
    });
  }
  hasPlayerReachedDeuce(playerAGame, playerBGame) {
    if (playerAGame === 50 && playerBGame === 50) {
      return true;
    } else {
      return false;
    }
  }
  hasPlayerWonGame(playerAGame, playerBGame) {
    // console.log(playerAGame, playerBGame);
    if (playerAGame === 50 && playerBGame < 40) {
      return true;
    } else if (playerAGame === 60 && playerBGame <= 40) {
      return true;
    } else {
      return false;
    }
  }
  hasPlayerWonSet(playerASet, playerBSet) {
    console.log(playerASet, playerBSet);
    if (playerASet === 6 && playerBSet <= 4) {
      return true;
    } else if (playerASet === 7 && playerBSet <= 6) {
      return true;
    } else {
      return false;
    }
  }

  hasPlayerWonMatch(playerAMatch, playerBMatch) {
    // console.log(playerAMatch, playerBMatch);
    if (playerAMatch === 3 && playerBMatch) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    return (
      <div className='column'>
        <div className='row'>
          <span className='bold player-name'>Name</span>
          <span className='bold player-score'>Game</span>
          <span className='bold player-score'>Set</span>
          <span className='bold player-score'>Match</span>
        </div>

        <div className='row'>
          <span className='player-name'>{this.state.playerOne}</span>
          <span className='player-score'>
            {this.gameSequence[this.state.playerOneGame]}
          </span>
          <span className='player-score'>{[this.state.playerOneSet]}</span>
          <span className='player-score'>{[this.state.playerOneMatch]}</span>
        </div>

        <div className='row'>
          <span className='player-name'>{this.state.playerTwo}</span>
          <span className='player-score'>
            {this.gameSequence[this.state.playerTwoGame]}
          </span>
          <span className='player-score'>{[this.state.playerTwoSet]}</span>
          <span className='player-score'>{[this.state.playerTwoMatch]}</span>
        </div>

        <div className='row inputs'>
          <button onClick={() => this.playerOneScored()}>
            {this.state.playerOne}
          </button>
          <button onClick={() => this.playerTwoScored()}>
            {this.state.playerTwo}
          </button>
        </div>

        <div>
          <p>
            The Winner is
            <span className='winner-name' />
          </p>
          <button>Reset scoreboard</button>
        </div>
      </div>
    );
  }
}

export default TennisGame;
