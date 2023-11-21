const createPlayer = require('../components/player')
const createShip = require('../components/Ship')
const createGameboard = require('../components/gameboard')

test('a player should be able to have a board', ()=>{
    const board = createGameboard(10,10)
    const player1 = createPlayer(board)


    expect(player1.getBoard().getCount()).toBe(100)
})

test('a player should be able to attack the enemies board', ()=>{
    const board = createGameboard(10,10)
    const player1 = createPlayer(board)
    const enemiesBoard = createGameboard(10,10)
    const ship1 = createShip(5, 'one')
    enemiesBoard.placeShipHorizontally(ship1,[0,4])

    expect(player1.attack(enemiesBoard,0,6)).toBe(true)
    expect(player1.attack(enemiesBoard,0,3)).toBe(false)
})




