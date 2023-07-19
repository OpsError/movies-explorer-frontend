import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  const authorized = true;

  return(
      <div>
        <Header authorized={authorized} />
        
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
