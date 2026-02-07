
class Ship {
    constructor(length, hit, sunk){
        this.length = length;
        this.hit = 0;
        this.sunk = sunk;
    }

    addHit (){
        this.hit ++
    }

    isSunk(){
        if (this.length <= this.hit){
            return true;
        } else return false;
    }
}

class Gameboard {
    marked = [];

    placeShip (ship, length, orientation){
        const start = -Math.floor(length/2);
        const cells = [];

        for (let i = 0; i < length; i++){
            if (orientation === 'horizontal'){
                let curr = start + i;
                let cell = [ship[0] + curr, ship[1]]

                if (cell[0] <= 7 && cell[0] >= 0){
                    cells.push(cell)
                } else {
                    return;
                }
            } else if (orientation === 'vertical'){
                let curr = start + i;
                let cell = [ship[0], ship[1] + curr]

                if (cell[1] <= 7 && cell[1] >= 0){
                    cells.push(cell)
                } else {
                    return;
                }
            }
        }

        //compare marked cells to incoming pushed cell
        for (let i = 0; i < cells.length; i++){
            for (let j = 0; j < this.marked.length; j++){
                if (cells[i][0] === this.marked[j][0] && cells[i][1] === this.marked[j][1]){
                    return;
                }
            }
        }

        cells.forEach((cell) => {
            this.marked.push(cell)
        })

        console.log(this.marked)
    }
}
    // receiveAttack (x, y){
    //     //takes pair of coordinates, determine whether or not the attack hit a ship
    //     //send the hit function to the correct ship
    //     //record coordinates of the missed shot
    // }
    //track missed attacks
    //report whether or not all their ships have been sunked

// }

const gameboard = new Gameboard();
gameboard.placeShip([3,4], 4, 'vertical')

class Player {
    // const human;
    // const computer;
}

module.exports =  {Ship, Gameboard}