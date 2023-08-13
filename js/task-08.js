const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const { elements } = event.currentTarget;
    const emailValue = elements.email.value;
    const passwordValue = elements.password.value;

    
    if (!emailValue || !passwordValue) {
        alert('Toate câmpurile trebuie completate!');
        return;
    }

    
    const formData = {
        email: emailValue,
        password: passwordValue
    };

    
    console.log(formData);

    
    loginForm.reset();
});
