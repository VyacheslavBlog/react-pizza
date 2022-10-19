import React from 'react';
import { useSelector } from 'react-redux';
import { PizzaBlock } from './pizzaBlock/pizzaBlock';
import PizzaBlockLoader from './pizzaBlock/pizzaBlockLoader';

export const Pizza = () => {
  const { items, status } = useSelector((state) => state.pizzas);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <PizzaBlockLoader key={index} />);

  return (
    <>
      {status === 'error' ? (
        <div className="HomeError">
          <div class="cart cart--empty">
            <h2>
              Произошла ошибка <icon>😕</icon>
            </h2>
            <p>
              К сожалению, произошла ошибка при загрузке питсы
              <br />
            </p>
          </div>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}
    </>
  );
};
