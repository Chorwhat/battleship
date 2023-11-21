import createShip from '../components/Ship'

test('Initial hits should be 0', () => {
    // Create a ship instance
    const ship = createShip(3, 'Ship1');

    // Check the initial hits
    expect(ship.getHits()).toBe(0);
});

test('Get shipName should work', () => {
    // Create a ship instance
    const ship = createShip(3, 'Ship1');

    // Check the initial hits
    expect(ship.getShipName()).toBe('Ship1');
});

test('Hit function should increase hits', () => {
    // Create a ship instance
    const ship = createShip(3, 'Ship2');

    // Hit the ship
    ship.hit();

    // Check the hits after one hit
    expect(ship.getHits()).toBe(1);
});



test('If hits = length, ship should be sunk', () => {
    const ship = createShip(3, 'Ship1')
    
    ship.hit();
    ship.hit();
    ship.hit();
    
    // Check if the ship is sunk after 3 hits
    expect(ship.getIsSunk()).toBeTruthy();
})
