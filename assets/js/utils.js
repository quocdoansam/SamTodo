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

function openModal(modalSelector) {
    document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("open"));
    document.querySelector(modalSelector).classList.add("open");
}

function generateUID() {
    return crypto.randomUUID();
}

const elementManager = {
    addClass(selector, className) {
        document.querySelector(selector).add(className);
    },

    removeClass(selector, className) {
        document.querySelector(selector).remove(className);
    }
}