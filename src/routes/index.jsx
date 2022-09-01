import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { CadastroUsuario } from './../pages/CadastroUsuario';

export function Rotas() {
 
    return (
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    );
  }