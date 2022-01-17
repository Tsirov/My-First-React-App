import { Link } from 'react-router-dom';
import { useContext } from 'react';
import  AuthContext  from '../../contexts/AuthContext';
// import { AuthContext } from '../../contexts/AuthContext';



const Header = () => {
    const { user } = useContext(AuthContext);
    
    let guestNavigation = (
        <section className="navbar-anonymous">
            <ul>
                <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
            </ul>
        </section>
    );

    let userNavigation = (
        <div className="second-bar">
            <ul>
                <li>Welcome, {user.email}!</li>
                <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
            </ul>
        </div>
    );

    return (
        <header id="site-header">
            <nav className="navbar">

                <section className="navbar-dashboard">
                    <div className="first-bar">
                        <Link to="/dashboard">Dashboard</Link>
                        <Link className="button" to="/myPets">My Pets</Link>
                        <Link className="button" to="/create">Add Pet</Link>
                    </div>
                    {user.email ? userNavigation : guestNavigation}
                    
                </section>
               
            </nav>
        </header>
    );
}

export default Header;