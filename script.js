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
