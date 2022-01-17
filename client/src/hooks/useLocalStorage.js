import { useState } from "react";

const useLocalStorage = (key,user) => {
    
    const [state, setState] = useState(() => { 
        try {
            let item = localStorage.getItem(key);
    
            return item
                ? JSON.parse(item)
                : user;
        } catch (err) {
            console.log(err);
            return undefined;
        }
    });

    

    const setUser = (value) => {
        console.log('set localStorage');
        try {
            
            localStorage.setItem(key, JSON.stringify(value));

            setState(value);
        } catch (err) {
            console.log(err);
        }

    }

    return [
        state,
        setUser
    ]
}

export default useLocalStorage;