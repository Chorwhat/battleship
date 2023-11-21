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

        function computerAttack(enemy,row,column){
            let enemyWidth = enemy.getWidth()
            let enemyHeight = enemy.getHeight()

            
        }

        return {getBoard, attack}
    }
    return createPlayer
})()

module.exports = Player