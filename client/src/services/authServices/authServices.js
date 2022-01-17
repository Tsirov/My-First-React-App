
export const login = async (email,password) => {
    let res = await fetch('http://pets-custom-serer.herokuapp.com/users/login', {
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


export const register = async (email, password) => {
    try {
        console.log(email,password);
    
        let res = await fetch('http://pets-custom-serer.herokuapp.com/users/register', {
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
    } catch (err) {
        console.log(err);
        return;
    }
};

export const logout = (token) => {
    return fetch(`http://pets-custom-serer.herokuapp.com/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};




