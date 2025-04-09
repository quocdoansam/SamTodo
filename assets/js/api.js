async function login(email, password) {
    try {
        const data = await customFetch.get(`users?email=${email}&password=${password}`);

        if (data) {
            const user = data[0];
            const filter = { id: user.id, name: user.fullName };

            localStorage.setItem("user", JSON.stringify(filter));

            return true;
        }
        return false;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
}

async function isAuthorized() {
    let userData = localStorageManagement.getItem("user");

    if (!userData) {
        console.warn("No user data found.");
        return false;
    }

    try {
        userData = JSON.parse(userData);

        if (!userData.id) {
            console.warn("User data is invalid.");
            return false;
        }

        const data = await customFetch.get(`users?id=${userData.id}`);
        return data.length > 0;
    } catch (error) {
        console.error("Authentication failed:", error);
        return false;
    }
}


document.addEventListener('DOMContentLoaded', function (e) {
    // customFetch.get("users?email=a&&password=a").then(data => console.log(data));
});