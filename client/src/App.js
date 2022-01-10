import { Route, Routes, } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import MyPets from './components/MyPets';
import Create from './components/Create';

function App() {
    return (
        <div id="container">
            <Header />


            <Routes >
                <Route path="/" element={<Dashboard />}  />
                <Route path="/login" element={<Login />}  />
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
