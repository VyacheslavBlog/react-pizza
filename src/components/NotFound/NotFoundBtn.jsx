import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NotFoundStyles.module.scss';

export const NotFoundBtn = () => {
  return (
    <NavLink to="/" className={style.btn}>
      Вернуться на главную
    </NavLink>
  );
};
