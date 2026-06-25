import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import ComboBuilder from './pages/ComboBuilder';
import './index.css';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(true);

  return (
    <Router>
      <div className={`app-container ${temaEscuro ? 'tema-escuro' : 'tema-claro'}`}>
        <nav className="navbar-principal">
          <div className="nav-centro-agrupado">
            <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>
              Catálogo
            </NavLink>

            <Link to="/">
              <img src="/img/logo.png" alt="Shy Guy Falls Tech" className="logo-menu" />
            </Link>

            <NavLink to="/builder" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>
              Combo Builder
            </NavLink>
          </div>
          <button onClick={() => setTemaEscuro(!temaEscuro)} className="btn-tema-img btn-tema-absoluto" title="Alternar Tema">
            <img
              src={temaEscuro ? "/img/theme/modo_claro.png" : "/img/theme/modo_escuro.png"}
              alt="Alternar Tema"
            />
          </button>

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