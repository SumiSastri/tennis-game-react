// Test-suite - jasmine.js
it('should start both players with a score of 0-0', () => {
  const game = new TennisGame();
  expect(game.score()).toEqual([0, 0]);
});
it('should update scores to 15-0 when playerOne scores', () => {
  const game = new TennisGame();
  game.playerONeAddPoint();
  expect(game.score()).toEqual([15, 0]);
});
it('should update score to 0-15 when playerTwo scores', () => {
  const game = new TennisGame();
  game.playerTwoAddPoint();
  expect(game.score()).toEqual([0, 15]);
});
it('should keep a running score of both players as the game progresses', () => {
  const game = new TennisGame([15, 15]);
  game.playerOneAdd();
  expect(game.score()).toEqual([30, 15]);
});
it('should keep a running score of both players as the game progresses', () => {
  const game = new TennisGame([15, 15]);
  game.playerTwoAddPoint();
  expect(game.score()).toEqual([15, 30]);
});

it('should keep a running score of both players as the game progresses', () => {
  const game = new TennisGame([15, 30]);
  game.playerOneAddPoint();
  expect(game.score()).toEqual([30, 30]);
});
it('should keep a running score of both players as the game progresses', () => {
  const game = new TennisGame([30, 30]);
  game.playerTwoAddPoint();
  expect(game.score()).toEqual([30, 40]);
});
it('should keep a running score of both players as the game progresses', () => {
  const game = new TennisGame([30, 40]);
  game.playerTwoAddPoint();
  expect(game.score()).toEqual([30, 50]);
});

it('should keep a running score of both players as the game progresses', () => {
  const game = new TennisGame([30, 50]);
  game.playerOneAddPoint();
  expect(game.score()).toEqual([40, 50]);
});

it('should set score back to 40-40 on the deuce exception', () => {
  const game = new TennisGame([40, 50]);
  game.playerOneAddPoint();
  expect(game.score()).toEqual([40, 40]);
});

it('a playerOne should win game if score 50-30', () => {
  const game = new TennisGame([40, 30]);
  game.playerOneWinGame();
  expect(game.score()).toEqual([50, 30]);
});
it('a playerTwo should win game if score 30-50', () => {
  const game = new TennisGame([30, 40]);
  game.playerTwoWinGame();
  expect(game.score()).toEqual([30, 50]);
});
it('should set scores to 0-0 if playerOne or playerTwo wins game', () => {
  const game = new TennisGame([50, 30]);
  game.playerOneWinGame();
  expect(game.score()).toEqual([0, 0]);
});

it('should set scores to 0-0 if playerOne or playerTwo wins game', () => {
  const game = new TennisGame([30, 50]);
  game.playerTwoWinGame();
  expect(game.score()).toEqual([0, 0]);
});