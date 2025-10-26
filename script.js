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
    if (isNaN(gridSize) === false && gridSize < 100) {
        changeColor.parentNode.removeChild(changeColor);
        const newContainer = document.querySelector("#new-container")
        for (let i = 0; i < gridSize * gridSize; i++) {
            let divSquare = document.createElement("div")
            newContainer.appendChild(divSquare);
        }
    }
    console.log(gridSize)
})
