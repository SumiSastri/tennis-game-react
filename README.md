
## Tennis game kata

#### Set up - root files & styling
* npm-x create-react-app tennis-game
* cd into folder - yarn start 
* remove react branding from css/jsx in app.js
* add h1 jsx tag Tennis Game Kata in app.js
* create components folder
* Set up a basic component - rce tab for the game tennis-game.js
* Styling for the game is in app.css


The index.js file renders the whole app into the HTML-DOM

The App.js file is basic as it derives inputs from the components imported to the page

```
import React from 'react';
import './App.css';
import TennisGame from './components/tennis-game'

function App() {
  return (
    <div className="tennis-game-app">
      <header className="ScoreBoard">
    <h1>Tennis-Game-Kata</h1>
        <TennisGame />
      </header>
    </div>
  );
}

export default App;
```
#### Rendering and returning jsx elements

* test render is working with one div and a h1 jsx tag
* the render structure is a parent div with a class name coloumn
* add children - rows to display names of players, scores
* children of rows - span to display scores
* Buttons to advance scores of the individual players
* A paragraph to display winner and a span to display the winner name
* A button for the js garbage collector to clear the game down

Inspect the elements in the console to ensure the methods used displayed in the right jsx element

#### Styling in app.css

* Basic styling using flex box to align items

#### Game logic in pseudo code (acceptance criteria) 
 * the game has two players
 * scores start at 0-0
 * scores should update to 15-0 when player one scores a point
 * and to 0-15 when player 2 wins a point
 * a running score should be maintained based on the score sequence
 * the score sequence is 0, 15, 30, 40,50, 60
 * the deuce exception is when scores are 50-50
 * scores return to 40-40 when they are 50-50
 * a game is won when one player is at 50 or 60 and the other is two points behind 
 * winning a game earns the player one set point
 * 1-0 is when the first player wins a set
 * 0-1 is when the first player wins a set
 * when a set is won, game scores revert to 0-0
 * players continue to win games and sets
 * the first player to win 7 sets earns a match point
 * player one wins a match at 1-0
 * player two wins a match at 0-1
 * set & game points go back to 0-0 when a match is won
 * the first player past 3 matches wins the game
 * the name of the winner is printed on the board
 * the games, sets, matches reset to 0-0 respectively


### Intializing the game

The class of TennisGame is initialized with the scores that the players can achieve in a game, set and match.

- the game sequence for the progression of points of a game
- the set sequence for the progression of sets won to win a match
- the match sequence for the number of games a player must win to win game, set and match

```
export class TennisGame extends Component {
  gameSequence = [0, 15, 30, 40, 50, 60];
  setSequence = [0, 1, 2, 3, 4, 5, 6, 7];
  matchSequence = [0, 1, 2, 3];

  ```
  The constructor properties are held in state as an object - this defines the data that changes as the game progresses

  ```
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
```

- the key function is to change state from 0-0 to advance points through the game
- conditions and functions determine these state changes (changes of scores)
-  if the player won a point?
   
  ```
  playerOneScored(){}
  playerTwoScored(){}

```
- if the player won a game?
- if the player won a set?
- the function is run, state is reset and then the jsx element is condtionally rendered with the new state
     
 ```
 hasPlayerWonSet(playerASet, playerBSet) {
    if (playerASet === 6 && playerBSet <= 4) {
      return true;
    } else if (playerASet === 7 && playerBSet <= 5) {
      return true;
    } else {
      return false;
    }
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

```

### Handling exceptions

- the deuce exception breaks a pattern, therefore, a conditional code block is run to check if the players have reached the deuce exception

```
hasPlayerReachedDeuce(playerAGame, playerBGame) {
    if (playerAGame === 50 && playerBGame === 50) {
      return true;
    } else {
      return false;
    }
  }
```
once this break of the iterative pattern is established then an action follows returning scores in state to 40-40, this is a position in the array with an index of 3 

    ```
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

    ```

    The final step is to find a winner by comparing scores and print the winner's name on the board

    Once the winner has been declared, the garbage-collector has to be called and the reset game scores will clear the data that has been cached returning the game to the original state.