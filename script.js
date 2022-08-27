const container = document.querySelector('#container');

let i=0, n=16;

container.innerHTML = 
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
    .repeat(n);


const rows = document.querySelectorAll('.row');

const cells = document.querySelectorAll('.cell');


rows.forEach(row => {
    cells.forEach(cell => {
        cell.addEventListener('mouseover', e => {
            e.target.style.background = 'black';
        });
    })
})















