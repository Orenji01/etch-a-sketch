const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    let divSquare = document.createElement("div")
    container.appendChild(divSquare);
}

const element = document.querySelector("div");
element.classList.add("change-color")

const changeColor = document.querySelector(".change-color")
changeColor.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
    container.style.backgroundColor = "white";
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridSize = prompt("Type how big you want your grid size to be");
    if (isNaN(gridSize) === false && Number(gridSize) < 101) {

        changeColor.parentNode.removeChild(changeColor);
        const newContainer = document.querySelector("#new-container")
        for (let i = 0; i < gridSize * gridSize; i++) {
            let divSquare = document.createElement("div")
            newContainer.appendChild(divSquare);
        }
        newContainer.style.width = 10 * Number(gridSize) + "px";
        newContainer.style.height = 10 * Number(gridSize) + "px";
        newContainer.style.border = "1px solid";

        const newSquares = document.querySelector("div");
        newSquares.classList.add("new-change-color")

        const newChangeColor = document.querySelector(".new-change-color")
        newChangeColor.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "red";
            newContainer.style.backgroundColor = "white";
        });
    }
})
