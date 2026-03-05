const container = document.querySelector(".container");
let gridSize = 16;

function randomizeColor() {
    let red = Math.trunc(Math.random() * 255);
    let green = Math.trunc(Math.random() * 255);
    let blue = Math.trunc(Math.random() * 255);

    return `rgb(${red} ${green} ${blue})`;
}

function generateGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("item");
            container.appendChild(div);
        }

        const br = document.createElement("div");
        br.classList.add("break");

        container.appendChild(br);
    }

    const items = document.querySelectorAll(".container .item");

    items.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = randomizeColor();

            let opacity = item.style.opacity;
            item.style.opacity = opacity ? (parseFloat(opacity) + 0.1) : 0.1;
        })
    })
}

generateGrid(gridSize);

function deleteGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

const btnConfig = document.querySelector(".config");
const btnReset = document.querySelector(".reset");
const btnClear = document.querySelector(".clear");

btnConfig.addEventListener("click", () => {
    let gridSize = 0;

    do {
        gridSize = prompt("Enter the size of your grid", "");

        console.log(gridSize);

        if (gridSize === null) {
            return;
        }

    } while (gridSize > 100 || gridSize < 1 || isNaN(gridSize));

    if (gridSize > 0 || gridSize <= 100) {
        deleteGrid();
        generateGrid(gridSize);
    }
});

btnReset.addEventListener("click", () => {
    let confirmation = confirm("This will reset the grid back to 16x16.\nAre you sure?")

    if (confirmation) {
        deleteGrid();
        generateGrid(16);
    }
})

btnClear.addEventListener("click", () => {
    const items = document.querySelectorAll(".container .item");

    for (let item of items) {
        item.style.backgroundColor = "white";
    }
})