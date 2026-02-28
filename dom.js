import { Game } from "./game.js";

const btn = document.querySelector('button');


btn.addEventListener('click', () => {
    // e.preventDefault.Default();
    // Game().newGame();
    Game().makeGrid();

})

