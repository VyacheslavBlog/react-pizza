import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaBlockLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="140" cy="130" r="125" />
    <rect x="0" y="275" rx="10" ry="10" width="280" height="28" />
    <rect x="0" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="124" y="430" rx="0" ry="0" width="3" height="5" />
    <rect x="129" y="412" rx="20" ry="20" width="152" height="42" />
    <rect x="0" y="418" rx="10" ry="10" width="102" height="27" />
  </ContentLoader>
);

export default PizzaBlockLoader;
