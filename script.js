
/* Select our grid container */
const container = document.getElementById('grid-container');


/* Create grid*/

function makeGrid(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for (let s = 0; s < (rows * cols); s++){
        let square = document.createElement('div');
        square.innerText = (s + 1);
        container.appendChild(square).className = "grid-item";
    }
}

/* Establish initial 16 x 16 grid */
makeGrid(16, 16);










