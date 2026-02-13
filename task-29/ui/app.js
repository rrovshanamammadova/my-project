
const API_URL = "http://localhost:3000/users";

document.addEventListener('DOMContentLoaded', () =>{
const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const inputs = registerForm.querySelectorAll('input');
            const fullName = inputs[0].value;
            const email = inputs[1].value;
            const password = inputs[2].value;
            const confirmPassword = inputs[3].value;

            if (password !== confirmPassword) {
                alert("Passwords are not the same!");
                return;
            }

            const userData = {
                fullName: fullName,
                email: email,
                password: password
            };

            localStorage.setItem(email, JSON.stringify(userData));

            alert("Registration completed successfully! Now you can log in.");
            window.location.href = 'index.html'; 
        });
    }


    const loginForm = document.querySelector('.right-side form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = loginForm.querySelectorAll('input');
            const email = inputs[0].value;
            const password = inputs[1].value;

            const savedUser = localStorage.getItem(email);

            if (savedUser) {
                const userObject = JSON.parse(savedUser);

                if (userObject.password === password) {
                    alert(`Welcome, ${userObject.fullName}!`);
                } else {
                    alert("Password is uncorrect!");
                }
            } else {
                alert("Registration with this email was not found!");
            }
        });
    }
})
