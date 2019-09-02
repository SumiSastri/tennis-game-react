// interface Properties {
//   playerOne: string;
//   playerTwo: string;
// }

// interface GameState {
//   playerOne: string;
//   playerTwo: string;
//   playerOneGame: number;
//   playerOneSet: number;
//   playerOneMatch: number;
//   playerTwoGame: number;
//   playerTwoSet: number;
//   playerTwoMatch: number;
//   winnerGameSetAndMatch: string;
// }

export default class TennisGame {
  gameState; //: GameState;

  constructor(properties) {
    this.gameState = {
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
    this.gameState.playerOneGame = this.gameState.playerOneGame + 1;
    const isDeuce = this.hasPlayerReachedDeuce(
      this.gameState.playerOneGame,
      this.gameState.playerTwoGame
    );

    if (isDeuce) {
      this.gameState = {
        ...this.gameState,
        playerOneGame: 3,
        playerTwoGame: 3
      };
    } else {
      const hasPlayerWonGame = this.hasPlayerWonGame(
        this.gameState.playerOneGame,
        this.gameState.playerTwoGame
      );

      if (hasPlayerWonGame) {
        this.gameState = {
          ...this.gameState,
          playerOneGame: 0,
          playerTwoGame: 0,
          playerOneSet: this.gameState.playerOneSet + 1
        };

        const hasPlayerWonSet = this.hasPlayerWonSet(
          this.gameState.playerOneSet,
          this.gameState.playerTwoSet
        );

        if (hasPlayerWonSet) {
          this.gameState = {
            ...this.gameState,
            playerOneSet: 0,
            playerTwoSet: 0,
            playerOneMatch: this.gameState.playerOneMatch + 1
          };

          const hasAnyPlayerWonMatch = this.hasAnyPlayerWonMatch(
            this.gameState.playerOneMatch,
            this.gameState.playerTwoMatch
          );

          if (hasAnyPlayerWonMatch) {
            this.gameState = {
              ...this.gameState,
              playerOneMatch: 0,
              playerTwoMatch: 0,
              winnerGameSetAndMatch: this.getWinnerName(
                this.gameState.playerOneMatch,
                this.gameState.playerTwoMatch
              )
            };
          }
        }
      }
    }
  }
  playerTwoScored() {
    // this.setState({ playerTwoGame: this.state.playerTwoGame + 1 }, () => {
    //   if (
    //     this.hasPlayerReachedDeuce(
    //       this.state.playerTwoGame,
    //       this.state.playerOneGame
    //     )
    //   ) {
    //     this.setState({
    //       playerTwoGame: 3,
    //       playerOneGame: 3
    //     });
    //   } else {
    //     if (
    //       this.hasPlayerWonGame(
    //         this.state.playerTwoGame,
    //         this.state.playerOneGame
    //       )
    //     ) {
    //       this.setState(
    //         {
    //           playerTwoGame: 0,
    //           playerOneGame: 0,
    //           playerTwoSet: this.state.playerTwoSet + 1
    //         },
    //         () => {
    //           if (
    //             this.hasPlayerWonSet(
    //               this.state.playerTwoSet,
    //               this.state.playerOneSet
    //             )
    //           ) {
    //             this.setState(
    //               {
    //                 playerTwoSet: 0,
    //                 playerOneSet: 0,
    //                 playerTwoMatch: this.state.playerTwoMatch + 1
    //               },
    //               () => {
    //                 if (
    //                   this.hasAnyPlayerWonMatch(
    //                     this.state.playerTwoMatch,
    //                     this.state.playerOneMatch
    //                   )
    //                 ) {
    //                   this.setState({
    //                     playerOneMatch: 0,
    //                     playerTwoMatch: 0,
    //                     winnerGameSetAndMatch: this.getWinnerName(
    //                       this.state.playerOneMatch,
    //                       this.state.playerTwoMatch
    //                     )
    //                   });
    //                 }
    //               }
    //             );
    //           }
    //         }
    //       );
    //     }
    //   }
    // });
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
      return this.gameState.playerOne;
    } else if (playerTwoMatches === 3) {
      return this.gameState.playerTwo;
    } else {
      return '';
    }
  }

  getPlayerOneName() {
    return this.gameState.playerOne;
  }

  getPlayerTwoName() {
    return this.gameState.playerTwo;
  }

  getPlayerOneGame() {
    return this.gameState.playerOneGame;
  }
  getPlayerOneSet() {
    return this.gameState.playerOneSet;
  }
  getPlayerOneMatch() {
    return this.gameState.playerOneMatch;
  }

  getPlayerTwoGame() {
    return this.gameState.playerTwoGame;
  }

  getPlayerTwoSet() {
    return this.gameState.playerTwoSet;
  }
  getPlayerTwoMatch() {
    return this.gameState.playerTwoMatch;
  }
  getPreviousWinner() {
    return this.gameState.winnerGameSetAndMatch;
  }

  reset() {
    this.gameState = {
      ...this.gameState,
      playerOneGame: 0,
      playerOneSet: 0,
      playerOneMatch: 0,
      playerTwoGame: 0,
      playerTwoSet: 0,
      playerTwoMatch: 0,
      winnerGameSetAndMatch: ''
    };
  }
}
