import GameBoard from './gameboard'

const Player = (() => {

    const createPlayer = (enemyName, gameboard, opponent=null) => {
        let board = gameboard
        let opp = opponent
       
        function checkIfLost(board){
            if(board.isFleetSunk() == true){
                alert(enemyName + " won!")
                location.reload()
                return true
            }
            return false
        }

        function getBoard(){
            return board
            
        }

        function attack(enemy,row,column){
            if(!checkIfLost(board)){
            handleClick(enemy,row,column)
            return checkIfLost(board)
            }
        }

        // function computerAttack(enemy,row,column, depth=0){
    
        //     if (depth > 1) {
        //         return false;
        //     }

        //     if (enemy.isValidTarget(row,column)){
        //         if(!checkIfLost(board)){
        //         handleClick("player1",row,column)
        //         }
        //         return checkIfLost(board)
        //     }else{

        //         return (
        //         computerAttack(enemy,row+1,column, depth+1) ||
        //         computerAttack(enemy,row-1,column, depth+1) ||
        //         computerAttack(enemy,row,column+1, depth+1) ||
        //         computerAttack(enemy,row,column-1, depth+1)
        //         )
        //     }
        // }

        function computerAttack(enemy) {
            let attacked = false
        
            while (!attacked) {
                let row = Math.floor(Math.random() * 10)
                let column = Math.floor(Math.random() * 10)
        
                if (enemy.isValidTarget(row, column) && !enemy.getMissedAttacks().includes(`${row},${column}`)) {
                    if (!checkIfLost(board)) {
                        handleClick("player1", row, column);
                        
                        attacked = true
                    }
                    return checkIfLost(board);
                }
            }
        
            return false;
        }

        function fillBoardWithCells(boardDiv){
            const divContainer = document.getElementById(boardDiv);
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    const cell = document.createElement("div");
            
                    cell.id = `${boardDiv}-${i}-${j}`;

                    if(gameboard.getBoard()[i][j] != 'x'){
                        cell.classList.add("ship");
                    }
        
                    cell.addEventListener("click", () => {
                        attack(boardDiv,i, j)
                        opponent.computerAttack(opponent.getBoard())
                });
            
                    divContainer.appendChild(cell);
                    
                }
               
            }
   
        }

        function clearBoardOfCells(boardDiv){
            const divContainer = document.getElementById(boardDiv);
            divContainer.innerHTML = '';
            
   
        }

        function handleClick(boardDiv, row, column){

            if(row >=10 || column >= 10){
                return false
            }
            const cell = document.getElementById(`${boardDiv}-${row}-${column}`);
          
            if (gameboard.getBoard()[row][column] != 'x') {       
        cell.classList.add("successful-attack");
    } else if(gameboard.getBoard()[row][column]=='x'){
        cell.classList.add("missed-attack");
    }
    gameboard.recieveAttack(row,column)
    
        }
        

        return {getBoard, attack, computerAttack,fillBoardWithCells, clearBoardOfCells}
    }
    return createPlayer
})()

export default Player