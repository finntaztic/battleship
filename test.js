
const {Ship, Gameboard} = require('./main')



test('hit test', () => {
    let ship = new Ship()
    ship.addHit();  
    expect (ship.hit).toBe(1)
})

test('returns false when ship is not sunk', () => {
  const ship = new Ship(3); 
  ship.addHit();
  ship.addHit();         
  expect(ship.isSunk()).toBe(false);
});

// test('returns hello', () => {
//   const gameboard = new Gameboard(); 
//   // gameboard.placeShip(9)       
//   expect(gameboard.placeShip(9)).toBe('hello');
// });


