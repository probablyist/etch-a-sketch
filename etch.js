// create function to generate grid squares
const etchGrid = document.getElementById("etchGrid");

function makeRows(rows, cols) {
    etchGrid.style.setProperty('--grid-rows', rows);
    etchGrid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1);  //remove
        etchGrid.appendChild(cell).className = "grid-item";
        etchGrid.appendChild(cell).id = "cell" + c;
    };
};

makeRows(16, 16);