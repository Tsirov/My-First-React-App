export const login = (username) => {
    console.log('login method', username);
    localStorage.setItem("username", username);
    return;
};

export const getUser = () => {
    let username = localStorage.getItem("username");

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
}