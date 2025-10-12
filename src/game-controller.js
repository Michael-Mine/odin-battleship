import { player } from "./game-logic-tested/player";

export function gameController() {
  // create players
  const players = createPlayers();
  console.log(players);
  // populate player's gameboard with predetermined coordinates

  // display both player's boards in html and render using info from gameBoard in dom-view
  // event listeners to step through game turn by turn using other objects methods
  // user click for attacks, re-render boards, track current players turn here
  // make computer attacks random
  // create conditions to end game after all ships sunk here

  // implement system to allow players to place their ships via coord or button to random

  // extra credit:
  // implement drag and drop to place ships
  // create 2-player option
  // polish intelligence of computer by having it try adjacent slots after hit
}

function createPlayers() {
  const player1 = player();
  const player2 = player();
  return [player1, player2];
}
