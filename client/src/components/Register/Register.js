
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js/authServices';


const Register = ({onLogin}) => {
    const navigate = useNavigate();

    function onSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let username = formData.get('username');
        let password = formData.get('password');

        authService.register(username);
        onLogin(username);
        
        navigate('/'); //this is like redirect ( after login the user i want to navigate this user to page "/")
    }

    return (
        <section className="register">
            <form onSubmit={onSubmitHandler} method="POST">
                <fieldset>
                    <legend>Register</legend>
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
                    <input className="button" type="submit" className="submit" value="Register" />
                </fieldset>
            </form>
        </section>
    );
}

export default Register;