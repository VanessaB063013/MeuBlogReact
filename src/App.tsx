import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';

import { Grid, Paper } from '@material-ui/core';
import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/login" element={<Login />} />
        
          </Routes>
        </div>
        <Footer />
      </Router>


    </>

  );
}

export default App;
