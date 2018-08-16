// const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
// if (!player) {
//   return <div>Sorry, but the player was not found</div>;
// }

import React from 'react';

const BeerDetails = props => {
  console.log(props.match.params.id);

  const id = parseInt(props.match.params.number, 10);

  return <div>hello</div>;
};

export default BeerDetails;
