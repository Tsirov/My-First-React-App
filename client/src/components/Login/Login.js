import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
// import {AuthContext} from '../../contexts/AuthContext';
import * as authService from '../../services/authServices/authServices';
import useLocalStorage from '../../hooks/useLocalStorage';

const Login = ({ onLogin }) => {
    const [loadingState, setLoadingState] = useState(false);
    const navigate = useNavigate();

    // const { onLogin } = useContext(AuthContext);

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        authService.login(email, password)
            .then((authData) => {
                setLoadingState(true);
                onLogin(authData);
                setLoadingState(false);

                navigate('/dashboard');

            }).catch(err => {
                console.log(err);
            })


    }
    const loading = <h1>Loading..</h1>

    const loginTemplate = (

        <section className="login">
            <form id="login-form" onSubmit={ onLoginHandler } method='POST'>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Login" />
                </fieldset>
            </form>
        </section>
    );

    return loadingState ? loading : loginTemplate ;
}

export default Login;