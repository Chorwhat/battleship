

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


// player1Board.placeShipHorizontally(ship1,[0,3])
// player1Board.placeShipVertically(ship2,[0,0])
// player1Board.placeShipVertically(ship3,[7,5])
// player1Board.placeShipHorizontally(ship4,[4,3])
// player1Board.placeShipHorizontally(ship5,[9,3])


// let shipIndex = 0;
// let fleetLength = player1Board.getFleet().size
// while (fleetLength < 5) {
//     let orientation = parseInt(prompt("Enter 1 to place vertically or 0 to place horizontally"));
//     let row = parseInt(prompt("Enter row"));
//     let col = parseInt(prompt("Enter column"));
//     let ships = [ship1, ship2, ship3, ship4, ship5];

//     alert("before size " + player1Board.getFleet().size)
//     if (orientation === 0) {
//         alert(`Attempt horizontal placement of ${ships[shipIndex].getShipName()} at ${row}, ${col}`);
//         if (player1Board.placeShipHorizontally(ships[shipIndex], [row, col])) {
//             alert(`Placed ${ships[shipIndex].getShipName()} horizontally`);
//             shipIndex += 1;
//             fleetLength += 1
//         } else {
//             alert("Could not place horizontally");
//         }
//     } else if (orientation === 1) {
//         alert(`Attempt vertical placement of ${ships[shipIndex].getShipName()} at ${row}, ${col}`);
//         if (player1Board.placeShipVertically(ships[shipIndex], [row, col])) {
//             alert(`Placed ${ships[shipIndex].getShipName()} vertically`);
//             fleetLength += 1
//             shipIndex += 1;
//         } else {
//             alert("Could not place vertically");
//         }
//     } else if (orientation === -1) {
//         break;
//     }

//     alert(`ShipIndex ${shipIndex}`);
//     alert(`Fleet size: ${fleetLength}`);
// }

let shipIndex = 0
let fleetLength = player1Board.getFleet().size
const ships = [ship1, ship2, ship3, ship4, ship5];



function placeShip() {
    let rowInput = parseInt(document.getElementById("rowInput").value);
    let colInput = parseInt(document.getElementById("colInput").value);
    let buttonInput = document.getElementById("buttonInput");
    let shipsLeftText = document.getElementById("shipsLeft");
    let shipsLengthText = document.getElementById("shipsLength");

    let row = parseInt(rowInput);
    let col = parseInt(colInput);

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
            alert.log("Could not place horizontally");
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
            alert.log("Could not place vertically");
        }
    } else {
        console.log("Invalid orientation. Please enter 0 or 1.");
    }

    console.log(`ShipIndex: ${shipIndex}`);
    console.log(`Fleet size: ${fleetLength}`);
    player.clearBoardOfCells("player1")
    player.fillBoardWithCells("player1")

    if(fleetLength == 5){
        buttonInput.classList.add("noshow")
    }
}

window.placeShip = placeShip; 

player2Board.placeShipHorizontally(ship1,[2,3])
player2Board.placeShipVertically(ship2,[0,0])


const player = createPlayer("The computer", player1Board)
const enemy = createPlayer("You", player2Board,player)
player.fillBoardWithCells("player1")
enemy.fillBoardWithCells("player2")



