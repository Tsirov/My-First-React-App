import {useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authServices/authServices';

const Logout = ({onLogout}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        authService.logout()
            .then(() => {
                onLogout();
                navigate('/login');
            })
    }, [])

    return null;
    
}

export default Logout;