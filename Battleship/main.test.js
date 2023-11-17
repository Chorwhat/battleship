const sum = require('./main');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds a negative to get a negative number', () => {
    expect(sum(5,-10)).toBe(-5);
});