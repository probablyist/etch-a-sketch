
const etchGrid = document.getElementById("etchGrid");

//generate grid of divs, assign class and id to each
function makeRows(rows, cols) {
    etchGrid.style.setProperty('--grid-rows', rows);
    etchGrid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        etchGrid.appendChild(cell).className = "gridItem";
        // etchGrid.appendChild(cell).id = "cell"; //+ c to number
    };
};

makeRows(16, 16);


//add hover effect coloring grid cells
const target = etchGrid.querySelectorAll('.gridItem');

target.forEach(gridItem => {
    gridItem.addEventListener('mouseover', function activeCell(event) {
        gridItem.classList.add("active");
    });
});