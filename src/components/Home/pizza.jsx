import React from 'react';
import { PizzaBlock } from './pizzaBlock/pizzaBlock';
import PizzaBlockLoader from './pizzaBlock/pizzaBlockLoader';

export const Pizza = () => {
  //https://63404624e44b83bc73cd3e47.mockapi.io/items

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63404624e44b83bc73cd3e47.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="content__items">
      {isLoading
        ? [...new Array(8)].map((_, index) => <PizzaBlockLoader key={index} />)
        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
    </div>
  );
};
