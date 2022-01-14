import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js/authServices';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');

        console.log(email, password);
        authService.login(email, password)
            .then((authData) => {
                onLogin(authData);
                navigate('/dashboard'); //this is like redirect ( after login the user i want to navigate this user to page "/")

            }).catch(err => {
                console.log(err);
            })


    }

    return (
        <section className="login">
            <form id="login-form" onSubmit={ onLoginHandler } method='POST'>
                <fieldset>
                    <legend>Login</legend>
                    <p className="field">
                        <label for="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="username" placeholder="Username" />
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