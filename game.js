import { Player, Gameboard } from "./main.js";


function Game (){

    const newGame = () => {
    const p1 = new Player('human');
    const p2 = new Player('computer');

    p1.gameBoard.placeShip([2,2], 5, 'vertical');
    p1.gameBoard.placeShip([5,2], 5, 'horizontal');
    
    p2.gameBoard.placeShip([4,2], 5, 'horizontal');

    console.log(p1)
    console.log(p2)
    }

    const makeGrid = () => {
    const container = document.querySelector('.container');
    const board = Gameboard();
    console.log(board)

    let row = 7;
    let col = 7;

    // console.log(Player().gameBoard())

        //human container
        const human = document.createElement('div');
        human.classList.add('human')
        container.appendChild(human);

        for (let i = 0; i < row; i++){
            for (let j = 0; j < col; j++){
                const div = document.createElement('div');
                human.appendChild(div);
                div.setAttribute('row', i);
                div.setAttribute('col', j);
            }
        }

         //computer container
        const computer = document.createElement('div');
        computer.classList.add('computer')
        container.appendChild(computer);

        for (let i = 0; i < row; i++){
            for (let j = 0; j < col; j++){
                const div = document.createElement('div');
                computer.appendChild(div);
                div.setAttribute('row', i);
                div.setAttribute('col', j);
            }
        }
    }

    const renderShips = (gameBoard) => {

        console.log('hello')
        //get the marked cells
        //get the divs
        //compare and mark the cell 
    
    }
    return {
        newGame,
        makeGrid,
        renderShips
    }
}

const game = new Game;
console.log(game.renderShips(gameBoard))
// Game().makeGrid()
export {Game}




