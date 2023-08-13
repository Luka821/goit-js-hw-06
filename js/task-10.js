function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
    const amount = Number(input.value);
    createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const boxes = [];
    let dimension = 30; 

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${dimension}px`;
        box.style.height = `${dimension}px`;
        box.style.backgroundColor = getRandomHexColor();

        boxes.push(box);

        dimension += 10; 
    }

  
    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = ''; 
}