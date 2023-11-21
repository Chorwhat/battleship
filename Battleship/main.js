

const createGameBoard = require("./components/gameboard")
// Import your GameBoard module here

// Create game boards for player1 and player2
const player1Board = createGameBoard(10, 10);
const player2Board = createGameBoard(10, 10);

// Get the player divs
const player1Div = document.getElementById("player1");
const player2Div = document.getElementById("player2");

// Add cells to player1 and player2 grids
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const cell1 = document.createElement("div");
        const cell2 = document.createElement("div");

        // Add a click event listener to each cell
        cell1.addEventListener("click", () => handleClick(player1Board, i, j));
        cell2.addEventListener("click", () => handleClick(player2Board, i, j));

        player1Div.appendChild(cell1);
        player2Div.appendChild(cell2);
    }
}

// Function to handle cell click
function handleClick(board, row, column) {
    console.log(`Clicked on Player ${board === player1Board ? "1" : "2"}'s board. Row: ${row}, Column: ${column}`);
    // Add your game logic here
}
