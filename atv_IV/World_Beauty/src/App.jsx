
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clientes from './pages/cliente/clientes';
import Cadastros from './pages/cadastro/cadastros';



function App() {
 

  return (
    <>
      
      
        <Routes>
             
             
              <Route path="/" element={<Clientes/>}/>
              <Route path="/clientes" element={<Clientes/>}/>
              <Route path="/cadastros" element={<Cadastros/>}/>

        </Routes>

      
    </>
  )
}

export default App
