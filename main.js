
class Ship {
    constructor(length, hit, sunk){
        this.length = length;
        this.hit = hit;
        this.sunk = sunk;
    }

    static checkTest (x){
        return x + 1;
    }

    hit (){
        //function that increases the number of ‘hits’ in your ship.
    }

    isSunk(){
        //calculates whether a ship is considered 
        // sunk based on its length and the number of 
        // hits it has received.
    }
}

class Gameboard {

    ship (){
        //place ship to specific coordinates
    }
    receiveAttack (x, y){
        //takes pair of coordinates, determine whether or not the attack hit a ship
        //send the hit function to the correct ship
        //record coordinates of the missed shot
    }


    //track missed attacks
    //report whether or not all their ships have been sunked
}

class Player {

}

module.exports =  {Ship}