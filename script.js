const dropDown = document.getElementById("selectFigure");
const blockFigure = document.getElementById("figure");

const paletteColor = document.getElementById('selectColor');


let selectorValue = dropDown.value;
let colorValue = paletteColor.value

const render = () => {
    blockFigure.innerHTML = `<div style="background-color: ${colorValue};" class="${selectorValue}"></div>`;
}

dropDown.addEventListener("change", (event) => {
    selectorValue = event.target.value

    render()
});

paletteColor.addEventListener("change", (event) => {
    colorValue = event.target.value

    render()
});

render()


