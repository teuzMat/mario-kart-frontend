import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import ComboBuilder from './pages/ComboBuilder';
import './index.css';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);

  return (
    <Router>
      <div className={`app-container ${temaEscuro ? 'tema-escuro' : 'tema-claro'}`}>

        <nav className="navbar-full">
          <div className="nav-container-limitado">
            <div className="nav-links">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>Sobre</NavLink>
              <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>Catálogo</NavLink>
              <NavLink to="/builder" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>Builder</NavLink>
            </div>

            <button onClick={() => setTemaEscuro(!temaEscuro)} className="btn-tema-img" title="Alternar Tema">
              <img
                src={temaEscuro ? "/img/theme/modo_claro.png" : "/img/theme/modo_escuro.png"}
                alt="Alternar Tema"
              />
            </button>

          </div>
        </nav>

        <main className="container-75">
          <Routes>
            <Route path="/" element={<div className="page-wrapper"><Home /></div>} />
            <Route path="/catalogo" element={<div className="page-wrapper"><Catalogo /></div>} />
            <Route path="/builder" element={<div className="page-wrapper"><ComboBuilder /></div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;