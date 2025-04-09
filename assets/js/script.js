const btnLogin = document.getElementById("btnLogin");
const btnSubmitLoginForm = document.getElementById("btnSubmitLoginForm");

const loginForm = document.querySelector('.login-form');

const form = document.querySelector('.form');

const emailEle = document.getElementById('email');
const passwordEle = document.getElementById('password');

const userSection = document.getElementById('userSection');

btnLogin.addEventListener('click', () => {
    loginForm.classList.toggle('open');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailEle.value;
    const password = passwordEle.value;

    if (login(email, password)) {
        alert("Login Successful.");
        loginForm.classList.remove('open');
    }
});

const login = (email, password) => {
    if (email === 'thang' && password === '123') {
        storageManagement.setItem('loggedIn', true);
        return true;
    } else {
        return false;
    }
}

btnSubmitLoginForm.addEventListener('click', () => {

});

document.addEventListener('click', () => { });

function closeForm(elementId) {
    document.getElementById(elementId).classList.remove('open');
}

function openForm(elementId) {
    if (elementId.cal) {
        return document.getElementById(elementId).classList.toggle('open');
    }
    closeForm(elementId);
}

const storageManagement = {
    setItem: (key, value) => {
        localStorage.setItem(key, value);
    },

    getItem: (key) => {
        localStorage.getItem(key);
    }
}

