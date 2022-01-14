export const register = (username) => {
    localStorage.setItem("username", username);
    return;
};

export const login = async (email,password) => {
    let res = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        header: { 
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })

    })

    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const logout = () => {
    localStorage.removeItem("username");
    return;
};

export const getUser = () => {
    let username = localStorage.getItem("username");

    return username;
};


export const isAuthenticated = () => {
    return Boolean(getUser());
}