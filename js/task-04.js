let counterValue = 0; 

const valueSpan = document.getElementById('value');


const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');


decrementButton.addEventListener('click', () => {
    counterValue--; // Micșorăm valoarea cu 1
    valueSpan.textContent = counterValue; 
});


incrementButton.addEventListener('click', () => {
    counterValue++; // Mărim valoarea cu 1
    valueSpan.textContent = counterValue;
});    