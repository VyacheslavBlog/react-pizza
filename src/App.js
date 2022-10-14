import './scss/app.scss';
import { Header } from './components/header';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './redux/slices/countSlice';
export const searchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div>
        <div>
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <span>{count}</span>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
        </div>
      </div>
      {/* <searchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </searchContext.Provider> */}
    </div>
  );
}

export default App;
