import './scss/app.scss';
import { Header } from './components/header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
