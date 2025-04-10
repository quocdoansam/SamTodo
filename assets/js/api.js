async function login(email, password) {
    try {
        const data = await customFetch.get(`users?email=${email}&password=${password}`);
        if (data) {
            const user = data[0];
            localStorage.setItem("user", user.uid);

            return true;
        }
        return false;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}

function logout() {
    localStorage.removeItem('user');
}

async function signUp(email, password, fullName) {
    const uid = generateUID();

    try {
        const data = await customFetch.post('users', { "uid": uid, "email": email, "password": password, "fullName": fullName });
        if (data) {
            return true;
        }
        return false;
    } catch (e) {
        console.warn("Create account failed: ", e);
        return false;
    }
}


async function isAuthorized() {
    let userData = localStorage.getItem("user");

    if (!userData || userData === "") {
        console.warn("No user data found.");
        return false;
    }

    try {
        const data = await customFetch.get(`users?uid=${userData}`);
        return data.length > 0;
    } catch (error) {
        console.error("Authentication failed:", error);
        return false;
    }
}

async function fetchUser() {
    let uid = localStorage.getItem('user');
    
    if (!uid || uid === "") {
        console.warn("No UID found.");
        return null;
    }

    try {
        const data = await customFetch.get(`users?uid=${uid}`);
        if (data) {
            console.log(data[0].fullName)
            return data[0];
        } else {
            return null;
        }
    } catch (e) {
        console.warn("Fetch user data failed: ", e);
        return null;
    }
}



document.addEventListener('DOMContentLoaded', function (e) {
    // customFetch.post("users", { "email": "doan123", "password": 1 }).then(data => console.log(data));
});