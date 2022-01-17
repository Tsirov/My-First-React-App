
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices/authServices';


const Register = ({onLogin}) => {
    const navigate = useNavigate();

    async function onSubmitHandler(e) {
        e.preventDefault();

        let formData = new FormData(e.target);

        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPass = formData.get('repeatPass');

        if (password != repeatPass) {
            return;
        }
        try {
            let response = await authService.register(email,password);
            onLogin(response);
        } catch (err) {
            console.log(err);
        }
            
        navigate('/'); //this is like redirect ( after login the user i want to navigate this user to page "/")
    }

    return (
        <section className="register">
            <form onSubmit={onSubmitHandler} method="POST">
                <fieldset>
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
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
                    <p className="field">
                        <label htmlFor="repeatPass">Password</label>
                        <span className="input">
                            <input type="password" name="repeatPass" id="repeatPass" placeholder="Repeat Password" />
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