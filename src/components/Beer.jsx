import React from 'react';
import { Link } from 'react-router-dom';

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Beer = props => {
  console.log(props.match.params);
  // const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  // if (!player) {
  //   return <div>Sorry, but the player was not found</div>;
  // }
  return (
    <div>
      <h1>WIP</h1>
      <Link to="/beers">Back</Link>
    </div>
  );
};

export default Beer;
