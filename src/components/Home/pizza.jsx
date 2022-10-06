import React from 'react';
import { PizzaBlock } from './pizzaBlock';
import pizzas from '../../assets/pizzas.json';

export const Pizza = () => {
  return (
    <div className="content__items">
      {pizzas.map((obj) => (
        <PizzaBlock {...obj} />
      ))}
    </div>
  );
};
