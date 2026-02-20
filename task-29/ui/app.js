
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

const translations = {
  az: {
    loginTitle: "Xoş Gəlmisiniz",
    loginSub: "Hesabınıza daxil olun",
    email: "Email",
    password: "Şifrə",
    loginBtn: "Daxil ol",
    registerTitle: "Hesab Yarat",
    fullname: "Ad Soyad",
    registerBtn: "Qeydiyyat",
    account:"Yeni hesabınızı qeydiyyatdan keçirin"
  },
  en: {
    loginTitle: "Welcome Back",
    loginSub: "Login to your account",
    email: "Email",
    password: "Password",
    loginBtn: "Login",
    registerTitle: "Create Account",
    fullname: "Full Name",
    registerBtn: "Register",
    account:"Register your new account"
    
  },
  ru: {
    loginTitle: "Добро пожаловать",
    loginSub: "Войдите в аккаунт",
    email: "Эл. почта",
    password: "Пароль",
    loginBtn: "Войти",
    registerTitle: "Создать аккаунт",
    fullname: "Имя Фамилия",
    registerBtn: "Регистрация",
    account:"Зарегистрируйте свой новый аккаунт"
  }
};

const select = document.getElementById("languageSelect");

select.addEventListener("change", function() {
  const selectedLang = this.value;
  localStorage.setItem("language", selectedLang);
  applyLanguage(selectedLang);
});


function applyLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });
}


window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "az";
  select.value = savedLang;
  applyLanguage(savedLang);
});
