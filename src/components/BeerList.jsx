import React from 'react';

import Beer from './Beer';

const BeerList = ({ beers }) => (
  <div className="flex-grid">
    {beers.map(beer => (
      <div className="col" key={beer.id}>
        <Beer beer={beer} />
      </div>
    ))}
  </div>
);

export default BeerList;
