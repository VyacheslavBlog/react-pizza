import React from 'react';
import { NotFoundBlock } from '../components/NotFound/NotFoundBlock';
import { NotFoundBtn } from '../components/NotFound/NotFoundBtn';

export const NotFound = () => {
  return (
    <>
      <div class="content">
        <div class="container container--cart">
          <NotFoundBlock />
          <NotFoundBtn />
        </div>
      </div>
    </>
  );
};
