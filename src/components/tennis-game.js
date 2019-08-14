import React, { Component } from 'react';
export class TennisGame extends Component {
  gameSequence = ['0', '15', '30', '40', 'Adv', 'Win'];
  setSequence = [0, 1, 2, 3, 4, 5, 6, 7];
  matchSequence = [0, 1, 2, 3];

  constructor(properties) {
    super(properties);

    this.state = {
      playerOne: properties.playerOne,
      playerTwo: properties.playerTwo,
      playerOneGame: 0,
      playerOneSet: 0,
      playerOneMatch: 0,
      playerTwoGame: 0,
      playerTwoSet: 0,
      playerTwoMatch: 0,
      winnerGameSetAndMatch: ''
    };
  }
  playerOneScored() {
    this.setState({ playerOneGame: this.state.playerOneGame + 1 }, () => {
      if (
        this.hasPlayerReachedDeuce(
          this.state.playerOneGame,
          this.state.playerTwoGame
        )
      ) {
        this.setState({
          playerOneGame: 3,
          playerTwoGame: 3
        });
      } else {
        if (
          this.hasPlayerWonGame(
            this.state.playerOneGame,
            this.state.playerTwoGame
          )
        ) {
          this.setState(
            {
              playerOneGame: 0,
              playerTwoGame: 0,
              playerOneSet: this.state.playerOneSet + 1
            },
            () => {
              if (
                this.hasPlayerWonSet(
                  this.state.playerOneSet,
                  this.state.playerTwoSet
                )
              ) {
                this.setState(
                  {
                    playerOneSet: 0,
                    playerTwoSet: 0,
                    playerOneMatch: this.state.playerOneMatch + 1
                  },
                  () => {
                    if (
                      this.hasAnyPlayerWonMatch(
                        this.state.playerOneMatch,
                        this.state.playerTwoMatch
                      )
                    ) {
                      this.setState({
                        playerOneMatch: 0,
                        playerTwoMatch: 0,
                        winnerGameSetAndMatch: this.getWinnerName(
                          this.state.playerOneMatch,
                          this.state.playerTwoMatch
                        )
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    });
  }
  playerTwoScored() {
    this.setState({ playerTwoGame: this.state.playerTwoGame + 1 }, () => {
      if (
        this.hasPlayerReachedDeuce(
          this.state.playerTwoGame,
          this.state.playerOneGame
        )
      ) {
        this.setState({
          playerTwoGame: 3,
          playerOneGame: 3
        });
      } else {
        if (
          this.hasPlayerWonGame(
            this.state.playerTwoGame,
            this.state.playerOneGame
          )
        ) {
          this.setState(
            {
              playerTwoGame: 0,
              playerOneGame: 0,
              playerTwoSet: this.state.playerTwoSet + 1
            },
            () => {
              if (
                this.hasPlayerWonSet(
                  this.state.playerTwoSet,
                  this.state.playerOneSet
                )
              ) {
                this.setState(
                  {
                    playerTwoSet: 0,
                    playerOneSet: 0,
                    playerTwoMatch: this.state.playerTwoMatch + 1
                  },
                  () => {
                    if (
                      this.hasAnyPlayerWonMatch(
                        this.state.playerTwoMatch,
                        this.state.playerOneMatch
                      )
                    ) {
                      this.setState({
                        playerOneMatch: 0,
                        playerTwoMatch: 0,
                        winnerGameSetAndMatch: this.getWinnerName(
                          this.state.playerOneMatch,
                          this.state.playerTwoMatch
                        )
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    });
  }
  hasPlayerReachedDeuce(playerOneScore, playerTwoScore) {
    if (playerOneScore === 4 && playerTwoScore === 4) {
      return true;
    } else {
      return false;
    }
  }
  hasPlayerWonGame(playerOneGameScore, playerTwoGameScore) {
    if (playerOneGameScore === 4 && playerTwoGameScore < 3) {
      return true;
    } else if (playerOneGameScore === 5 && playerTwoGameScore <= 3) {
      return true;
    } else {
      return false;
    }
  }
  hasPlayerWonSet(playerOneSetScore, playerTwoSetScore) {
    if (playerOneSetScore === 6 && playerTwoSetScore <= 4) {
      return true;
    } else if (playerOneSetScore === 7 && playerTwoSetScore <= 6) {
      return true;
    } else {
      return false;
    }
  }
  hasAnyPlayerWonMatch(playerOneMatchScore, playerTwoMatchScore) {
    if (playerOneMatchScore === 3 || playerTwoMatchScore === 3) {
      return true;
    } else {
      return false;
    }
  }
  getWinnerName(playerOneMatches, playerTwoMatches) {
    if (playerOneMatches === 3) {
      return this.state.playerOne;
    } else if (playerTwoMatches === 3) {
      return this.state.playerTwo;
    } else {
      return '';
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
          <span className='player-score'>
            {this.setSequence[this.state.playerOneSet]}
          </span>
          <span className='player-score'>
            {this.matchSequence[this.state.playerOneMatch]}
          </span>
        </div>

        <div className='row'>
          <span className='player-name'>{this.state.playerTwo}</span>
          <span className='player-score'>
            {this.gameSequence[this.state.playerTwoGame]}
          </span>
          <span className='player-score'>
            {this.setSequence[this.state.playerTwoSet]}
          </span>
          <span className='player-score'>
            {this.matchSequence[this.state.playerTwoMatch]}
          </span>
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
            <span className='winner-name'>
              {this.state.winnerGameSetAndMatch !== ''
                ? `Game, Set & Match to ${this.state.winnerGameSetAndMatch}.`
                : ''}
            </span>
          </p>
        </div>
        <button>Reset scores and players</button>
      </div>
    );
  }
}

export default TennisGame;
