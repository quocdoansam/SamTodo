document.addEventListener('DOMContentLoaded', async function (e) {
    const btnLogin = document.querySelector(".btn-login");
    const loginForm = document.querySelector(".login-form");
    const loginEmail = loginForm.querySelector(".email");
    const loginPassword = loginForm.querySelector(".password");
    const btnForgot = loginForm.querySelector(".btn-forgot");
    const btnLoginSubmit = loginForm.querySelector(".btn-submit");
    const messageLogin = loginForm.querySelector('.message');

    const btnSignUp = document.querySelector(".btn-sign-up");
    const signUpForm = document.querySelector(".sign-up-form");
    const signUpEmail = signUpForm.querySelector(".email");
    const signUpPassword = signUpForm.querySelector(".password");
    const signUpFullName = signUpForm.querySelector(".full-name");
    const messageSignUp = signUpForm.querySelector('.message');
    const btnSignUpSibmit = signUpForm.querySelector('.btn-submit');

    const originTool = document.querySelector('.origin-tool');

    const accountTool = document.querySelector('.account-tool')
    const btnAccount = document.querySelector('.btn-account');
    const accountModal = document.querySelector('.account-modal');
    const accountMenu = accountModal.querySelector('.account-menu');
    const menuTitle = accountMenu.querySelector(".menu-title");

    const btnAddTask = document.querySelector('.btn-new-task');

    // Open login modal
    btnLogin.addEventListener('click', () => openModal('.login-modal'));

    // Open forgot modal
    btnForgot.addEventListener('click', () => openModal('.forgot-modal'));

    // Open sign up modal
    btnSignUp.addEventListener('click', () => openModal('.sign-up-modal'));

    // Open account modal
    btnAccount.addEventListener('click', () => openModal('.account-modal'));

    // Open add task modal
    btnAddTask.addEventListener('click', () => openModal('.add-task-modal'));
    accountModal.addEventListener('click', async (e) => {
        if (e.target.classList.contains('btn-log-out')) {
            logout();
            await accountStatus();
        }
    });

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-close-modal")) {
            const modal = event.target.closest(".modal");
            if (modal) modal.classList.remove("open");
        }
    });

    // Login
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        let hasError = false;

        hasError |= inputOnChange(loginEmail, "Enter your email...");
        hasError |= inputOnChange(loginPassword, "Enter password...");

        if (hasError) return;

        btnLoginSubmit.classList.add('loading');

        const email = loginEmail.value.trim();
        const password = loginPassword.value.trim();

        if (await login(email, password)) {
            await afterLogin();
        } else {
            btnLoginSubmit.classList.remove('loading');
            messageLogin.textContent = "Wrong email or password.";
            messageLogin.classList.add('open');
        }
    });

    signUpForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        let hasError = false;

        hasError |= inputOnChange(signUpEmail, "Enter your email...");
        hasError |= inputOnChange(signUpPassword, "Enter password...");
        hasError |= inputOnChange(signUpFullName, "Enter your full name...");

        if (hasError) return;

        btnSignUpSibmit.classList.add('loading');

        const email = signUpEmail.value.trim();
        const password = signUpPassword.value.trim();
        const fullName = signUpFullName.value.trim();

        if (await signUp(email, password, fullName)) {
            btnSignUpSibmit.classList.remove('loading');

            messageSignUp.textContent = "Create account successful."
            messageSignUp.classList.add('success');

            setTimeout(() => {
                messageSignUp.classList.remove('success');
            }, 15000)
        } else {
            messageSignUp.textContent = "Create account failed."
            messageSignUp.classList.add('danger');
            setTimeout(() => {
                messageSignUp.classList.remove('danger');
            }, 15000)
        }
    });

    async function accountStatus() {
        if (await isAuthorized()) {
            originTool.style.display = "none";
            accountTool.style.display = "flex";
        } else {
            accountTool.style.display = "none";
            originTool.style.display = "flex";
        }
    }

    // Modal
    function closeModal() {

    }

    async function userMapping() {
        let user = await fetchUser();
        if (user === null) return;
        console.log(user.fullName);
        menuTitle.textContent = `Hi, ${user.fullName}`;
    }

    async function afterLogin() {
        await accountStatus();

        loginForm.classList.remove('open');
        btnLoginSubmit.classList.remove('loading');
        loginForm.reset();
    }

    await accountStatus();
    await userMapping();
});