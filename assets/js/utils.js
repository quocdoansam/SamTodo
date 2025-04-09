const localStorageManagement = {
    setItem (key, value) {
        return localStorage.setItem(key, value);
    },

    getItem (key) {
        return localStorage.getItem(key);
    }
}

const customFetch = {
    baseURL: "https://67f69f3842d6c71cca62c348.mockapi.io",

    async get(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`);
            if (!response.ok) throw new Error(`GET failed: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error(`POST failed: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async put(endpoint, data) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error(`PUT failed: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },

    async delete(endpoint) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`, {
                method: "DELETE",
            });
            if (!response.ok) throw new Error(`DELETE failed: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            return null;
        }
    },
};
