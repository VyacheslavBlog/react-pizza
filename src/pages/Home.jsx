import React from 'react';
import { Categories } from '../components/Home/categories';
import { Pizza } from '../components/Home/pizza';
import { Sort } from '../components/Home/sort';

export const Home = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <Pizza />
      </div>
    </div>
  );
};
