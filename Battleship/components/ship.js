const Ship = (() => {

    const createShip = (length, name) => {
        //functions go here
        const shipName = name
        const shipLength = length
        let hits = 0
        let isSunk = false


        function getHits(){
            return hits
        }
        function hit(){
            hits += 1
        }





        return {name, length, getHits, hit}
    }
    return createShip
})()

module.exports = Ship