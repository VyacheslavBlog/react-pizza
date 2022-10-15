import React from 'react';
import { searchContext } from '../App';
import { Categories } from '../components/Home/categories';
import Pagination from '../components/Home/pagination';
import { Pizza } from '../components/Home/pizza';
import { Sort } from '../components/Home/sort';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const onChangeCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  const { searchValue } = React.useContext(searchContext);
  //https://63404624e44b83bc73cd3e47.mockapi.io/items
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const order = sortType.includes('-') ? 'asc' : 'desc';
  const sortBy = sortType.replace('-', '');
  const category = categoryId > 0 ? `&category=${categoryId}` : '';
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
  }, [categoryId, sortType, searchValue, currentPage, order, sortBy, category, search]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onClickCategories={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <Pizza searchValue={searchValue} isLoading={isLoading} items={items} />
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </div>
  );
};

//const [idCategories, setIdCategories] = React.useState(0);
// const [sortType, setsortType] = React.useState({
//   name: 'популярности',
//   sortProperty: 'rating',
// });
