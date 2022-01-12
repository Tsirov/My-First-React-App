import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices.js/authServices';

const Logout = ({onLogout}) => {
    const navigate = useNavigate();
    
    onLogout();

    authService.logout();

    navigate('/login');

    return null;
    
}

export default Logout;