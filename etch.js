
const etchGrid = document.getElementById('etchGrid');
const clearButton = document.getElementById('clearBtn');
const smallButton = document.getElementById('smallBtn');
const mediumButton = document.getElementById('mediumBtn');
const largeButton = document.getElementById('largeBtn');
const colorButton = document.getElementById('colorBtn');
const eraserButton = document.getElementById('eraserBtn');
let colorInput = document.querySelector('#color');
let paintColor = '#000000';

window.onload = makeRows(16, 16);
window.onload = startPainting();

//generate grid of divs, assign class and id to each
function makeRows(rows, cols) {
    etchGrid.style.setProperty('--grid-rows', rows);
    etchGrid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        etchGrid.appendChild(cell).className = 'gridItem';
    };
};

//add hover effect coloring grid cells
function startPainting() {
    const target = etchGrid.querySelectorAll('.gridItem');

    target.forEach(gridItem => {
        gridItem.addEventListener('mouseover', function activeCell() {
            // gridItem.classList.add('active');
            gridItem.style.backgroundColor = paintColor;
        });
    });
}

//button to remove coloring from cells
clearButton.addEventListener('click', removeActive);

function removeActive() {
    let cell = etchGrid.querySelectorAll('.gridItem');
    for(i = 0; i < cell.length; i++) {
        // cell[i].classList.remove('active');
        cell[i].style.backgroundColor = '#86868B'
    }
};

//buttons to change size of grid
smallButton.addEventListener('click', () => {
    removeAllChildNodes(etchGrid);
    makeRows(8, 8);
    startPainting();
});

mediumButton.addEventListener('click', () => {
    removeAllChildNodes(etchGrid);
    makeRows(16, 16);
    startPainting();
});

largeButton.addEventListener('click', () => {
    removeAllChildNodes(etchGrid);
    makeRows(32, 32);
    startPainting();
});

//remove all grid cells
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//Select color for paintbrush
colorInput.addEventListener('input', () => {
    paintColor = colorInput.value;
});

//Set color to background color
eraserButton.addEventListener('click', () => {
    paintColor = '#86868B';
    colorInput.value = '#86868B';
});