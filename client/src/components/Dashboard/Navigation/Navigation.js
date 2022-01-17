import { Link,NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className="navbar" >
            <ul>
                <li><Link to="/pets/all">All</Link></li>
                <li><Link to="/pets/cats">Cats</Link></li>
                <li><Link to="/pets/dogs">Dogs</Link></li>
                <li><Link to="/pets/parrots">Parrots</Link></li>
                <li><Link to="/pets/reptiles">Reptiles</Link></li>
                <li><Link to="/pets/other">Other</Link></li>

                {/* <li><NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/cat">Cats</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/dog">Dogs</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/parrot">Parrots</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/reptile">Reptiles</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/categories/Other">Other</NavLink></li> */}
            </ul>

            {/* <style jsx>{`
                .nav-link-selected {
                    background-color: lightgreen !important;
                }
            `}</style> */}
        </nav >
    );
}

export default Navigation;