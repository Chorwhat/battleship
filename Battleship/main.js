

import createGameBoard from "./components/gameboard"
import createShip from './components/ship'
import createPlayer from './components/player'


//first create boards, then ships, then place boards on ships, then assign players to boards
const player1Board = createGameBoard(10, 10);
const player2Board = createGameBoard(10, 10);

const ship1 = createShip(5, 'biggun')
const ship2 = createShip(4, 'pete')
const ship3 = createShip(3, 'tim')
const ship4 = createShip(3, 'tom')
const ship5 = createShip(1, 'lil guy')


player1Board.placeShipHorizontally(ship1,[0,3])
player1Board.placeShipVertically(ship2,[0,0])
player1Board.placeShipVertically(ship3,[7,5])
player1Board.placeShipHorizontally(ship4,[4,3])
player1Board.placeShipVertically(ship5,[3,9])



player2Board.placeShipHorizontally(ship1,[2,3])
player2Board.placeShipVertically(ship2,[0,0])


const player = createPlayer("The computer", player1Board)
const enemy = createPlayer("You", player2Board,player)
player.fillBoardWithCells("player1")
enemy.fillBoardWithCells("player2")



