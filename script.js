

/* Function that will create grid with specified size */

function makeGrid (size) {
    const grid = document.getElementById('grid-container');

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.style.backgroundColor = "grey";
        cell.innerText = (i + 1);
        grid.appendChild(cell);
    }

}







makeGrid(16);
















