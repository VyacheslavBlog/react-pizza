import React from 'react';
import { PizzaBlock } from './pizzaBlock';

export const Pizza = () => {
  //https://63404624e44b83bc73cd3e47.mockapi.io/items

  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63404624e44b83bc73cd3e47.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="content__items">
      {items.map((obj) => (
        <PizzaBlock key={obj.id} {...obj} />
      ))}
    </div>
  );
};
