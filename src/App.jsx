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
      {/* A classe do tema envolve TUDO, garantindo que o fundo e o texto mudem */}
      <div className={`app-container ${temaEscuro ? 'tema-escuro' : 'tema-claro'}`}>
        
        <nav className="navbar">
          <div className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>Sobre o Jogo</NavLink>
            <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>Catálogo</NavLink>
            <NavLink to="/builder" className={({ isActive }) => isActive ? 'nav-ativo' : ''}>Combo Builder</NavLink>
          </div>
          
          <button onClick={() => setTemaEscuro(!temaEscuro)} className="btn-tema">
            {temaEscuro ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
          </button>
        </nav>

        <main className="conteudo-rotas">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/builder" element={<ComboBuilder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;