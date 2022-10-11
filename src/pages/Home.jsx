import React from 'react';
import { Categories } from '../components/Home/categories';
import { Pizza } from '../components/Home/pizza';
import { Sort } from '../components/Home/sort';

export const Home = () => {
  //https://63404624e44b83bc73cd3e47.mockapi.io/items
  const [idCategories, setIdCategories] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = activeSort.sortProperty.replace('-', '');
  const category = idCategories > 0 ? `category=${idCategories}` : '';

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63404624e44b83bc73cd3e47.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [idCategories, activeSort, order, sortBy, category]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={idCategories} onClickCategories={(i) => setIdCategories(i)} />
          <Sort value={activeSort} onChangeSort={(i) => setActiveSort(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <Pizza isLoading={isLoading} items={items} />
      </div>
    </div>
  );
};
