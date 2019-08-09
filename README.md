
## Tennis game kata

#### Set up
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

### Intialising the game

The class of TennisGame is initialised with the scores that the players can achieve in a game, set and match.

The data is stored in arrays

```
export class TennisGame extends Component {
  gameSequence = [0, 15, 30, 40, 50, 60];
  setSequence = [0, 1, 2, 3, 4, 5, 6, 7];
  matchSequence = [0, 1, 2, 3];

  ```
  The constructor properties are held in state as an object

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
