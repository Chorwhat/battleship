const GameBoard = (() => {

    const createGameBoard = (height, width) => {
        const boardHeight = height
        const boardWidth = width
        let board = []
        
        

        for(let i=0;i < width; i++){
            board[i] = []
            for(let j=0; j<height; j++){
            
            board[i][j]={name: j, isShip: false, struck: false}
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

        function placeShip(width, height, x,y, length){
            for(let i = 0; i<length; i++){
                if(height - length >= y){
                    board[x][y+i].isShip = true
                }
                else{
                    return(false)
                }

            }
            return true
        }
10, 10
    8



        

        return{getHeight, getBoard, getCount, placeShip}
    }

    return createGameBoard
})()

module.exports = GameBoard