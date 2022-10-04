import React from 'react';
import { PizzaBlock } from './pizzaBlock';

export const Pizza = () => {
  return (
    <div className="content__items">
      <PizzaBlock title="Мексиканская" price="500" />
      <PizzaBlock />
      <PizzaBlock />
      <PizzaBlock />
    </div>
  );
};
