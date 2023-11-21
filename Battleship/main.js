

import createGameBoard from "./components/gameboard"
import createShip from './components/ship'


// Create game boards for player1 and player2
const player1Board = createGameBoard(10, 10);

player1Board.fillBoardWithCells(player1Board)
const ship1 = createShip(3, 'carl')
player1Board.placeShipHorizontally(ship1,[0,3])
const ship2 = createShip(7, 'carl')
player1Board.placeShipVertically(ship2,[0,0])

// Get the player divs
const player1Div = document.getElementById("player1");
const player2Div = document.getElementById("player2");


