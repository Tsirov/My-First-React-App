import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js/authServices';

const Login = (onLogin) => {
    console.log(onLogin);
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let username = formData.get('username');
        let password = formData.get('password');

        authService.login(username);
        onLogin(username);
        
        navigate('/'); //this is like redirect ( after login the user i want to navigate this user to page "/")
    }

    return (
        <section className="login">
            <form id="login-form" onSubmit={onLoginHandler} method='POST'>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label for="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label for="password">Password</label>
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
}

export default Login;