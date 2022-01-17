import { Route, Routes, } from 'react-router-dom';

// import { AuthContext } from './contexts/AuthContext';
import  AuthContext from './contexts/AuthContext';
import useLocalStorage  from './hooks/useLocalStorage';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';
import Details from './components/Details';
import * as authService from './services/authServices/authServices';

function App() {
    let user = {
        _id: '',
        email: '',
        accessToken: '',
    };
    let [userInfo, setUserInfo] = useLocalStorage('user',user);

    const onLogin = (userForLogin) => {
       setUserInfo(userForLogin)
      
        return;
    }

    const onLogout = () => {
        setUserInfo(user);
    }

    return (
        <div id="container">
            <AuthContext.Provider value={{user: userInfo,onLogin}}>
            <Header  />


            <Routes >
                <Route path="/" element={ <Dashboard /> } />
                <Route path="/dashboard" element={ <Dashboard /> } />
                <Route path="/pets/:category" element={ <Details /> } />
                <Route path="/login" element={ <Login onLogin={onLogin} /> } />
                <Route path="/logout" element={ <Logout onLogout={ onLogout } /> } />
                <Route path="/register" element={ <Register onLogin={onLogin} /> } />
                <Route path="/myPets" element={ <MyPets /> } />
                <Route path="/create" element={ <Create /> } />



                {/* <Route path="/categories/:category" exact element={ <Home /> } /> */ }
            </Routes>
            </AuthContext.Provider>


            <Footer />

        </div>

    );
}

export default App;
