

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

let shipIndex = 0
let fleetLength = player1Board.getFleet().size
const ships = [ship1, ship2, ship3, ship4, ship5];

function placeShip() {
    let rowInput = parseInt(document.getElementById("rowInput").value);
    let colInput = parseInt(document.getElementById("colInput").value);
    let buttonInput = document.getElementById("buttonInput");
    let shipsLeftText = document.getElementById("shipsLeft");
    let shipsLengthText = document.getElementById("shipsLength");
    let player2 = document.getElementById("player2");

    let row = parseInt(rowInput);
    let col = parseInt(colInput);
   
    //uncommenting the below line flips the grid placement
    //row = Math.abs(row-10)

    let orientation = parseInt(prompt("Enter 0 to place horizontally or 1 to place vertically"));

    if (orientation === 0) {
        if (player1Board.placeShipHorizontally(ships[shipIndex], [row, col])) {
            console.log(`Placed ${ships[shipIndex].getShipName()} horizontally`);
            shipIndex++;
            fleetLength++;
            shipsLeftText.innerText = `${5-fleetLength} left to place`
            if(shipIndex < 5){
            shipsLengthText.innerText = `placing ship of length: ${ships[shipIndex].getLength()}`
            }
        } else {
            alert("Could not place horizontally");
        }
    } else if (orientation === 1) {
        if (player1Board.placeShipVertically(ships[shipIndex], [row, col])) {
            console.log(`Placed ${ships[shipIndex].getShipName()} vertically`);
            shipIndex++;
            fleetLength++;
            shipsLeftText.innerText = `${5-fleetLength} left to place`
            if(shipIndex < 5){
            shipsLengthText.innerText = `placing ship of length: ${ships[shipIndex].getLength()}`}
        } else {
            alert("Could not place vertically");
        }
    } else {
        alert("Invalid orientation. Please enter 0 or 1.");
    }

    player.clearBoardOfCells("player1")
    player.fillBoardWithCells("player1")

    if(fleetLength == 5){
        buttonInput.classList.add("noshow")
        player2.classList.remove("noclick")
    }
}

window.placeShip = placeShip; 



function placeComputer() {
    const computerShips = [createShip(5, 'compShip1'), createShip(4, 'compShip2'), createShip(3, 'compShip3'), createShip(3, 'compShip4'), createShip(1, 'compShip5')];

    for (let i = 0; i < computerShips.length; i++) {
        let randomRow, randomCol, randomOrientation;

        // Generate random placement until a valid placement is found
        do {
            randomRow = Math.floor(Math.random() * 10);
            randomCol = Math.floor(Math.random() * 10);
            randomOrientation = Math.floor(Math.random() * 2); // 0 for horizontal, 1 for vertical

            // Use the appropriate method based on the randomOrientation
            if (randomOrientation === 0) {
                var placed = player2Board.placeShipHorizontally(computerShips[i], [randomRow, randomCol]);
            } else {
                var placed = player2Board.placeShipVertically(computerShips[i], [randomRow, randomCol]);
            }
        } while (!placed);

        console.log(`Placed ${computerShips[i].getShipName()} at [${randomRow}, ${randomCol}] ${randomOrientation === 0 ? 'horizontally' : 'vertically'}`);
    }
}


placeComputer()


const player = createPlayer("The computer", player1Board)
const enemy = createPlayer("You", player2Board,player)
player.fillBoardWithCells("player1")
enemy.fillBoardWithCells("player2")



