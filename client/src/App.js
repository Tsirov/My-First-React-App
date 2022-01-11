import { Route, Routes, } from 'react-router-dom';
import {useState, useEffect } from 'react'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
//here we need to call authService where we are calling bellow
import * as authService from './services/authServices.js/authServices';

function App() {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

    useEffect(() => { 
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user,
        })
    },[])

    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated: true,
            user:username,
        })
    }

    return (
        <div id="container">
            <Header {...userInfo}/>


            <Routes >
                <Route path="/" element={<Dashboard />}  />
                <Route path="/login" element={ <Login onLogin={onLogin}/>}  />
                <Route path="/register" element={<Register />}  />
                <Route path="/myPets" element={<MyPets />}  />
                <Route path="/create" element={<Create />}  />
               

                
                {/* <Route path="/categories/:category" exact element={ <Home /> } /> */}
            </Routes>


            <Footer />

        </div>

    );
}

export default App;
