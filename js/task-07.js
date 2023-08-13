const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');


fontSizeControl.addEventListener('input', (event) => {
    
    textSpan.style.fontSize = `${event.target.value}px`;
});