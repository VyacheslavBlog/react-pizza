import React from 'react';
import { searchContext } from '../App';
import { Categories } from '../components/Home/categories';
import Pagination from '../components/Home/pagination';
import { Pizza } from '../components/Home/pizza';
import { Sort } from '../components/Home/sort';

export const Home = () => {
  const { searchValue } = React.useContext(searchContext);
  //https://63404624e44b83bc73cd3e47.mockapi.io/items
  const [idCategories, setIdCategories] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';
  const sortBy = activeSort.sortProperty.replace('-', '');
  const category = idCategories > 0 ? `&category=${idCategories}` : '';
  const search = searchValue ? `&search=${searchValue}` : '';

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://63404624e44b83bc73cd3e47.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [idCategories, activeSort, searchValue, currentPage, order, sortBy, category, search]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={idCategories} onClickCategories={(i) => setIdCategories(i)} />
          <Sort value={activeSort} onChangeSort={(i) => setActiveSort(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <Pizza searchValue={searchValue} isLoading={isLoading} items={items} />
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};
