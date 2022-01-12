export const register = (username) => {
    localStorage.setItem("username", username);
    return;
};

export const login = (username) => {
    localStorage.setItem("username", username);
    return;
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