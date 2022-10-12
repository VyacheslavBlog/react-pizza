import React from 'react';
import { PizzaBlock } from './pizzaBlock/pizzaBlock';
import PizzaBlockLoader from './pizzaBlock/pizzaBlockLoader';

export const Pizza = ({ isLoading, items, searchValue }) => {
  const pizzas = items
    // .filter((obj) => {
    //   if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <PizzaBlockLoader key={index} />);

  return <div className="content__items">{isLoading ? skeletons : pizzas}</div>;
};
