import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App(){
  return(    
  <BrowserRouter>
    <header>
      <Link to='/'>#VANLIFE</Link>
      <nav>
        <Link to='about'>About</Link>
      </nav>
    </header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

root.render(
  <App />
);

// reportWebVitals();
