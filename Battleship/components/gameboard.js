import Ship from "./Ship"

const GameBoard = (() => {

    const createGameBoard = (height, width) => {
        const boardHeight = height
        const boardWidth = width
        let board = []
        
        

        for(let i=0;i < width; i++){
            board[i] = []
            for(let j=0; j<height; j++){
            
            board[i][j]='x'
            }
        }

        function getHeight(){
            return boardHeight
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
        console.log(shipName, isInRange, noShipsInRange)
           if(isInRange && noShipsInRange){
            for(let i=0;i<shipLength;i++){
                board[row][column+i] = `${shipName}: ${i+1}`
            }
            placed = true
           }
           console.log(board)
           
           return placed
        }

        function placeShipVertically(ship, start){
            let shipLength = ship.getLength()
            let shipName = ship.getShipName()
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
                 board[row+i][column] = `${shipName}: ${i+1}`
             }
             placed = true
            }
            
            return placed
           
        }




        

        return{getHeight, getBoard, getCount, placeShipHorizontally, placeShipVertically}
    }

    return createGameBoard
})()

module.exports = GameBoard