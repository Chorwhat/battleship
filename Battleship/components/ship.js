
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

        function getLength(){
            return shipLength
        }

        //SETTERS
        function hit(){
            hits += 1

            if(hits == shipLength){
                setIsSunk(true)
            }
        }

        function setIsSunk(bool){
            isSunk = bool
        }

        

        return {hit, setIsSunk, getHits, getIsSunk, getShipName, getLength}
    }
    return createShip
})()

export default Ship