import Ship from './ship'

const GameBoard = (() => {

    const createGameBoard = (height, width) => {
        const boardHeight = height
        const boardWidth = width
        let board = []
        let missedAttacks = []
        let successfulAttacks = []
        let fleet = new Map()
        
        

        for(let i=0;i < width; i++){
            board[i] = []
            for(let j=0; j<height; j++){
            
            board[i][j]='x'
            }
        }

        function getHeight(){
            return boardHeight
        }

        function getWidth(){
            return boardWidth
        }

        function getBoard(){
            return board
        }

        function getCount(){
            var count = board.reduce(function(currentCount, row) { 
                return currentCount + row.length;
            }, 0);

            return count
        }

        //currently functioning horizontally because of [x][y] being more like (y,x)
        //vertical if rotated counter clockwise 45 degrees
        function placeShipHorizontally(ship, start){
           let shipLength = ship.getLength()
           let shipName = ship.getShipName()
           let [row,column] = start
           let placed = false
           let shipHits = ship.getHits()

           let isInRange = shipLength + column <= boardHeight
           let noShipsInRange = true

           for(let i=0;i<shipLength;i++){
            if(isInRange){
                if(board[row][column+i] == `x`){
                    noShipsInRange = true
            }
            else{
                noShipsInRange = false
                break
            }
        }
        }
        
           if(isInRange && noShipsInRange){
            for(let i=0;i<shipLength;i++){
                board[row][column+i] = `${shipName}`
            }
            placed = true
            fleet.set(shipName,Ship(shipLength, shipName))
           }
           
           
           return placed
        }

        function placeShipVertically(ship, start){
            let shipLength = ship.getLength()
            let shipName = ship.getShipName()
            let shipHits = ship.getHits()
            let [row,column] = start
            let placed = false

 
            let isInRange = shipLength + row <= boardHeight
            let noShipsInRange = true

            for(let i=0;i<shipLength;i++){
                if(isInRange){
                    if(board[row+i][column] == `x`){
                        noShipsInRange = true
                }else{
                    noShipsInRange = false
                    break
                }
            }
            }
            
            if(isInRange && noShipsInRange){
             for(let i=0;i<shipLength;i++){
                 board[row+i][column] = `${shipName}`
                 placed = true
             }
             fleet.set(shipName,Ship(shipLength, shipName))
            }
            
            return placed
           
        }

        function getFleet(){
            return fleet
        }

        function getMissedAttacks(){
            return missedAttacks
        }

        function recieveAttack(row, column) {
            let target = board[row][column]
            if(target == 'x'){
                missedAttacks.push(`${row},${column}`)
                board[row][column] = 'M'
                return false
            }else if (!successfulAttacks.includes(`${row},${column}`)){
                successfulAttacks.push(`${row},${column}`)
                fleet.get(target).hit()
                board[row][column] = `${fleet.get(target).getShipName()} hit`
                return true
            }
            else{
                board[row][column] = "hit"
                return "water"
            }
        }

        function isFleetSunk(){
            let results = []
            fleet.forEach((ship) => {
                results.push(ship.getIsSunk())
            })
            return !results.includes(false)
        }

        function isValidTarget(row, column){

            if(row >= boardWidth || row < 0){
                return false
            }
            if(column >= boardHeight || column < 0){
                return false
            }

            if(board[row][column] == 'M'){
                return false
            }

            if(board[row][column].includes('hit')){
                return false
            }
            
            return true
        }




        

        return{getHeight, getWidth, isFleetSunk, getBoard,getMissedAttacks, getCount, getFleet, isValidTarget, placeShipHorizontally, placeShipVertically, recieveAttack}
    }

    return createGameBoard
})()

export default GameBoard