import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './components/nav/nav';
import Clientes from './pages/cliente/clientes';
import Produtos from './pages/produtos/produtos';
import Servicos from './pages/servicos/servicos';
import Pedidos from './pages/pedidos/pedidos';
import Cadastros from './pages/cadastro/cadastros';

class App extends Component {
  render() {
    return (
      <>
        <Nav/>
        
          <Routes>
            <Route path="/" element={<Clientes />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/pedidos" element={<Pedidos />} />
            <Route path="/cadastros" element={<Cadastros />} />
          </Routes>
        
      </>
    );
  }
}

export default App;
