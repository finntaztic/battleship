
const {Ship, Gameboard, Player} = require('./main')


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

test('places horizontal ship correctly', () => {
  const board = new Gameboard();

  board.placeShip([3,3], 3, 'horizontal');

  expect(board.marked).toEqual([
    [2,3],
    [3,3],
    [4,3]
  ]);

  expect(board.ships.length).toBe(1);
})

test('does not allow overlapping ships', () => {
    const board = new Gameboard();

    board.placeShip([3,3], 3, 'horizontal');
    board.placeShip([3,3], 3, 'vertical');

    expect(board.ships.length).toBe(1);
});

test('check hits', () => {
    const board = new Gameboard();

    board.placeShip([3,3], 3, 'horizontal');
    board.placeShip([4,4], 3, 'horizontal');

    // board.receiveAttack([5,3]);
    board.receiveAttack([3,3]);
    board.receiveAttack([2,3]);
    board.receiveAttack([4,3]);

    console.log(board.ships)

    expect (board.ships[0].ship.hit).toBe(3);
    expect (board.ships[0].ship.sunk).toBe(true);

});

test('check missed shot', () => {
    const board = new Gameboard();
    board.placeShip([3,3], 3, 'horizontal');

    board.receiveAttack([5,3]);
    board.receiveAttack([7,3]);

    console.log(board.miss)

    // expect(board.miss.length).toBe(1);
    expect(board.miss).toContainEqual([5,3]);
});

test('check player', () => {
  const player = new Player('human');
  const player2 = new Player('computer');

  expect(player.type).toBe('human');
  expect(player2.type).toBe('computer');
  expect(player.gameBoard).not.toBe(player2.gameBoard);
});

