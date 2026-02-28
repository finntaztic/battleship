
export class Ship {
    constructor(length, hit, sunk){
        this.length = length;
        this.hit = 0;
        this.sunk = sunk;
    }

    addHit (){
        this.hit ++;
        return this.hit;
    }

    isSunk(){
        if (this.length <= this.hit){
            return this.sunk = true;
        } else return this.sunk = false;
    }
}

export class Gameboard {
    constructor(){
        this.ships = [];
        this.miss = [];
    }  
    marked = [];

    placeShip (mid, length, orientation){
        //check the next cells from the mid
        const start = -Math.floor(length/2);
        const cells = [];

        for (let i = 0; i < length; i++){
            if (orientation === 'horizontal'){
                let curr = start + i;
                
                let cell = [mid[0], mid[1] + curr]

                if (cell[1] <= 6 && cell[1] >= 0){
                    cells.push(cell)
                } else {
                    return;
                }
            } 
            
            else if (orientation === 'vertical'){
                let curr = start + i;
                let cell = [mid[0] + curr, mid[1]]

                if (cell[0] <= 6 && cell[0] >= 0){
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

        //push all cells if qualified
        cells.forEach((cell) => {
            this.marked.push(cell)
        })

        //add cell to the ship
        const ship = new Ship(length)
        this.ships.push({ ship, cells })
    }

    receiveAttack (coord){
        const ships = this.ships;
        const miss = this.miss;

        for (let i = 0 ; i < ships.length; i++){
            for (let j = 0 ; j < ships[i].cells.length; j++){
                if (coord [0] === ships[i].cells[j][0] && coord [1] === ships[i].cells[j][1]){
                    ships[i].ship.addHit();

                    if (ships[i].ship.isSunk()){
                        return 'sunk';
                    }
                    return 'hit'
                } 
            }
        }
            miss.push(coord)
            return 'miss'
}
}


export class Player {
    constructor(type){
        this.type = type;
        this.gameBoard = new Gameboard();
    }
}
