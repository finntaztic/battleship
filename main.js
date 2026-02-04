
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
    //create three block ship??then place it? 

    // placeShip (midBlock){
    //     const right = [midBlock[0] + 1, midBlock[1]];
    //     const left = [midBlock[0] - 1, midBlock[1]];

    //     let list = [right, midBlock, left];

    //     for (let i = 0; i < list.length; i++){
    //         if (list[i][0] <= 9 && list [i][0] >= 0){
    //             //continue checking
    //         } else {
    //             return;
    //         }
    //     }

    //     list.forEach((item) => {
    //         this.marked.push(item)
    //     });

    //     console.log(this.marked)
    // }

    placeShip (ship, length){

        //offsets 
        const start = -Math.floor(length/2);
        const end = Math.floor(length/2);

        for (let i = 0; i < length; i++){
            // let currPos = ship[0] + start;
            // console.log(currPos)

            let curr = start + i;
            console.log(curr)

            // let curr = start;
            // curr++
            // console.log(curr)
        }



        // const mid = ship.length-1/2
        // const right = [midBlock[0] + 1, midBlock[1]];
        // const left = [midBlock[0] - 1, midBlock[1]];



        // let list = [right, midBlock, left];

        // for (let i = 0; i < list.length; i++){
        //     if (list[i][0] <= 9 && list [i][0] >= 0){
        //         //continue checking
        //     } else {
        //         return;
        //     }
        // }

        // list.forEach((item) => {
        //     this.marked.push(item)
        // });

        // console.log(this.marked)
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
gameboard.placeShip([8,2], 5)

// const gameboard = new Gameboard ();
// console.log(gameboard.placeShip([9]))

class Player {
    // const human;
    // const computer;
}

module.exports =  {Ship, Gameboard}