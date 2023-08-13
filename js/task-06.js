const validationInput = document.getElementById('validation-input');
const requiredLength = parseInt(validationInput.dataset.length);

validationInput.addEventListener('blur', () => {
    const currentValueLength = validationInput.value.length;
    
    if (currentValueLength === requiredLength) {

        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
      
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});