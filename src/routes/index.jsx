import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Cadastro } from "./../pages/Cadastro";
import { NotFound } from "./../pages/NotFound";

export function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
