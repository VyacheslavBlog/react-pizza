import React from 'react';
import { PizzaBlock } from './pizzaBlock/pizzaBlock';
import PizzaBlockLoader from './pizzaBlock/pizzaBlockLoader';

export const Pizza = ({ isLoading, items }) => {
  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, index) => <PizzaBlockLoader key={index} />)
        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
  );
};
