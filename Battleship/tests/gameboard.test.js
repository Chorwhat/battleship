const createGameboard = require('../components/gameboard');

test('Generate Board contains width * height elements', () => {
    const board = createGameboard(10,5)
    

    expect(board.getCount()).toBe(50)
})


test('Place ships works inbounds and returns true to signify placed', () => {
    const board = createGameboard(10,10)

    board.placeShip(10,10,0,0,4)
   
    expect(board.getBoard()[0][0].isShip).toBe(true)
    expect(board.getBoard()[0][1].isShip).toBe(true)
    expect(board.getBoard()[0][2].isShip).toBe(true)
    expect(board.getBoard()[0][3].isShip).toBe(true)
    expect(board.getBoard()[0][4].isShip).toBe(false)
    expect(board.placeShip(10,10,0,0,4)).toBe(true)
})

test('Place ships returns false out of bounds without placing anything', () => {
    const board = createGameboard(10,10)
    expect(board.placeShip(10,10,0,8,4)).toBe(false)
    expect(board.getBoard()[0][8].isShip).toBe(false)
})







