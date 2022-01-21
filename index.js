const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const ROWS = canvas.clientHeight;
const COLS = canvas.clientWidth;
const CELL = 30;
let factor = 1;

const buildings = document.querySelectorAll('.building');

drawGrid();

for (let i = 0; i < buildings.length; i++) {
    buildings[i].style.width = `${(i + 1) * CELL}px`;
    buildings[i].style.height = `${(i + 1) * CELL}px`;
    buildings[i].style.backgroundColor = '#e74c3c';
    
    buildings[i].addEventListener('click', chooseBuilding);
}

document.addEventListener('click', e => {
    ctx.fillStyle = '#c0392b';
    for (let i = 0; i < ROWS; i += CELL) {
        for (let j = 0; j < COLS; j += CELL) {
            if (e.layerX >= j && e.layerX <= j + CELL &&  
                e.layerY >= i && e.layerY <= i + CELL) {
                ctx.fillRect(j, i, CELL * factor, CELL * factor);
                
                console.log('layer:', e.layerX, e.layerY);
                console.log('grid:', j, i);
                console.log('grid + 1:', j + CELL, i + CELL);
                console.log('---');
            }
        }
    }
}, false);

function drawGrid() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';

    for (let i = 0; i < ROWS; i += CELL) {
        for (let j = 0; j < COLS; j += CELL) {
            ctx.strokeRect(j, i, CELL, CELL);
        }
    }
}
        
function chooseBuilding(event) {
    factor = parseInt(event.target.style.width) / CELL;
    
    for (const building of buildings) {
        building.style.border = 'none';
    }

    event.target.style.border = '10px solid #c0392b';
}