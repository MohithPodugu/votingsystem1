import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login';
import Home from './home';
import ChangePassword from './changepassword';
import AxiosTesting from './axiostesting';
import MyProfile from './myprofile';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Ballot from './ballot';

function Website(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/changepassword' element={<ChangePassword/>} />
        <Route path='/axiostesting' element={<AxiosTesting/>} />
        <Route path='/myprofile' element={<MyProfile/>} />
        <Route path='/ballot' element={<Ballot/>} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Website/> , document.getElementById('root'));

