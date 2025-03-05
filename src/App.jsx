import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SobreMi from './components/sobreMi';
import Personajes from './components/personajes';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Sobre Mí</Link>
          </li>
          <li>
            <Link to="/personajes">Personajes</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SobreMi />} />
        <Route path="/personajes" element={<Personajes />} />
      </Routes>
    </Router>
  );
}

export default App;
