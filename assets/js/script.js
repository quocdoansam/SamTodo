const btnLogin = document.querySelector(".btn-login");
const loginForm = document.querySelector(".login-form");
const loginEmail = loginForm.querySelector(".email");
const loginPassword = loginForm.querySelector(".password");

const btnSignUp = document.querySelector(".btn-sign-up");
const signUpForm = document.querySelector(".sign-up-form");
const signUpEmail = signUpForm.querySelector(".email");
const signUpPassword = signUpForm.querySelector(".password");
const signUpFullName = signUpForm.querySelector(".full-name");

const originTool = document.querySelector('.origin-tool');

const accountTool = document.querySelector('.account-tool')
const btnAccount = document.querySelector('.btn-account');
const accountModal = document.querySelector('.account-modal');

// Open login form
btnLogin.addEventListener('click', () => {
    loginForm.classList.toggle('open');
});

// Open account modal
btnAccount.addEventListener('click', () => {
    accountModal.classList.toggle('open');
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let hasError = false;

    hasError = inputOnChange(loginEmail, "Enter your email...");
    hasError = inputOnChange(loginPassword, "Enter password...");

    if (hasError) return;

    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    console.log(login(email, password))
    if (login(email, password)) {
        loginForm.classList.remove('open');
    } else {
        alert("Login failed.");
    }
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

// Listen event
function inputOnChange(inputElement, placeholder) {
    let isEmpty;

    if (inputElement.value === "") {
        inputElement.placeholder = 'This field is required';
        inputElement.classList.add("danger");

        isEmpty = true;
    }

    inputElement.addEventListener('input', function (e) {
        if (e.target.value === "") {
            inputElement.placeholder = 'This field is required';
            inputElement.classList.add("danger");

            isEmpty = true;
        } else {
            inputElement.placeholder = placeholder;
            inputElement.classList.remove("danger");

            isEmpty = false;
        }
    });

    return isEmpty;
}


// Modal
function closeModal() {

}

function userMapping() { }

document.addEventListener('DOMContentLoaded', function (e) {

    if (isAuthorized()) {
        originTool.style.display = "flex";
    } else {
        accountTool.style.display = "flex";
    }
});