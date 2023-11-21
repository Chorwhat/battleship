import GameBoard from './gameboard'

const Player = (() => {

    const createPlayer = (gameboard) => {
        let board = gameboard

        function getBoard(){
            return board
            
        }

        function attack(enemy,row,column){
            return enemy.recieveAttack(row,column)
        }

        function computerAttack(enemy,row,column, depth=0){
    
            if (depth > 10) {
                return false;
            }

            if (enemy.isValidTarget(row,column)){
                enemy.recieveAttack(row,column)
                return true
            }else{

                return (
                computerAttack(enemy,row+1,column, depth+1) ||
                computerAttack(enemy,row-1,column, depth+1) ||
                computerAttack(enemy,row,column+1, depth+1) ||
                computerAttack(enemy,row,column-1, depth+1)
                )
            }
        }

        return {getBoard, attack, computerAttack}
    }
    return createPlayer
})()

export default Player