

/* Function that will create grid with specified size */

function makeGrid (size) {
    const grid = document.getElementById('grid-container');

    const div = grid.querySelectorAll('div');
    
    div.forEach(d => d.remove());

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("grid-item");
        cell.style.backgroundColor = "grey";
        cell.innerText = (i + 1);
        grid.appendChild(cell);
    }

}


/* Set initial grid size */
makeGrid(16);


const button = document.querySelector('button');


/* get input of the user */
function input () {
    let answer = prompt("Enter a grid size dimension (min: 2 , max: 100");

    if (answer < 2 || answer > 100) {
        alert("Input error!");
        return;
    }

    makeGrid(answer);
}



button.addEventListener('click', input);
















