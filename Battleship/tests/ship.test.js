const createShip = require('../components/Ship');

test('Initial hits should be 0', () => {
    // Create a ship instance
    const ship = createShip(3, 'Ship1');

    // Check the initial hits
    expect(ship.getHits()).toBe(0);
});

test('Hit function should increase hits', () => {
    // Create a ship instance
    const ship = createShip(3, 'Ship2');

    // Hit the ship
    ship.hit();

    // Check the hits after one hit
    expect(ship.getHits()).toBe(1);
});
