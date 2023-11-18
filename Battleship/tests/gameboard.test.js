const createGameboard = require('../components/gameboard');
const createShip = require('../components/ship')

test('Generate Board contains height * width elements', () => {
    const board = createGameboard(10,5)
    

    expect(board.getCount()).toBe(50)
})


test('Place ships horizontally works inbounds', () => {
    const board = createGameboard(10,10)
    const ship = createShip(5, 'billy')
    const ship1 = createShip(3, 'carl')
    
    expect(board.placeShipHorizontally(ship,[0,3])).toBe(true)
    expect(board.placeShipHorizontally(ship1,[3,7])).toBe(true)
})

test('Place ship horizontally doesnt place out of bounds', () => {
    const board = createGameboard(10,10)
    const ship = createShip(5, 'billy')
    
    expect(board.placeShipHorizontally(ship,[0,7])).toBe(false)
})

test('Place ship vertically places in bounds', () => {
    const board = createGameboard(10,10)
    const ship = createShip(5, 'peepo')
    
    expect(board.placeShipVertically(ship,[1,7])).toBe(true)
})

test('Place ship vertically doesnt place out of bounds', () => {
    const board = createGameboard(10,10)
    const ship = createShip(5, 'peepo')
    
    expect(board.placeShipVertically(ship,[6,7])).toBe(false)
})

test('Dont allow overlapping ships to be placed vertically', () => {
    const board = createGameboard(10,10)
    const ship1 = createShip(5, 'one')
    const ship2 = createShip(5, 'two')
    
    expect(board.placeShipVertically(ship1,[3,7])).toBe(true)
    expect(board.placeShipVertically(ship2,[0,7])).toBe(false)
})

test('Dont allow overlapping ships to be placed horizontally', () => {
    const board = createGameboard(10,10)
    const ship1 = createShip(5, 'one')
    const ship2 = createShip(5, 'two')

    expect(board.placeShipHorizontally(ship1,[0,4])).toBe(true)
    expect(board.placeShipHorizontally(ship2,[0,3])).toBe(false)
})

test('hit ship with recieve attack', () => {
    const board = createGameboard(10,10)
    const ship1 = createShip(5, 'one')
    board.placeShipHorizontally(ship1,[0,4])

    expect(board.recieveAttack(0,7)).toBe("ship one hit")

})

test('sink ship with recieve attack', () => {
    const board = createGameboard(10,10)
    const ship1 = createShip(3, 'one')
    board.placeShipHorizontally(ship1,[0,4])
    board.recieveAttack(0,4)
    board.recieveAttack(0,5)
    board.recieveAttack(0,6)
    board.recieveAttack(0,7)
    
    
    expect(board.getFleet().get(ship1.getShipName()).getHits()).toBe(3)
    expect(board.getFleet().get(ship1.getShipName()).getIsSunk()).toBe(true)
})

test('log missed attacks with recieve attack', () => {
    const board = createGameboard(10,10)
    const ship1 = createShip(3, 'one')
    board.placeShipHorizontally(ship1,[1,4])
    board.recieveAttack(0,4)
    board.recieveAttack(1,4)

    expect(board.getMissedAttacks()).toContain('0,4')
    expect(board.getMissedAttacks()).not.toContain('1,4')
})


test('get fleet',()=>{
    const board = createGameboard(10,10)
    const ship1 = createShip(5, 'one')
    const ship2 = createShip(3, 'two')
    board.placeShipHorizontally(ship1,[0,4])
    board.placeShipVertically(ship2,[1,1])
    
    

    expect(board.getFleet().get('one').getShipName()).toBe('one')
    expect(board.getFleet().get('two').getShipName()).toBe('two')
})






