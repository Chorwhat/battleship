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

        return {getBoard, attack}
    }
    return createPlayer
})()

module.exports = Player