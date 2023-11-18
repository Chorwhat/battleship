const Ship = (() => {

    const createShip = (length, name) => {
        
        const shipName = name
        const shipLength = length
        let hits = 0
        let isSunk = false


        //GETTERS
        function getHits(){
            return hits
        }

        function getShipName(){
            return shipName
        }

        function getIsSunk(){
            return isSunk
        }

        //SETTERS
        function hit(){
            hits += 1

            if(hits == shipLength){
                isSunk = true
            }
        }

        return {hit, getHits, getIsSunk, getShipName}
    }
    return createShip
})()

module.exports = Ship