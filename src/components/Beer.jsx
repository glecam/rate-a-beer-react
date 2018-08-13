import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import apiUrl from '../config';

const Beer = ({ beer }) => {
  console.log(beer);
  // const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  // if (!player) {
  //   return <div>Sorry, but the player was not found</div>;
  // }
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <strong>{beer.name}</strong>
        </div>
        <div className="panel-body">
          <img src={`${apiUrl()}${beer.imageUrl}`} width="100%" />

          <table className="table">
            <tbody>
              <tr>
                <td>
                  <strong>Brewery:</strong>
                </td>
                <td>{beer.brewery.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Rating:</strong>
                </td>
                <td>
                  <StarRatingComponent
                    editing={false}
                    starCount={5}
                    value={beer.rating}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <div className="col-md-5 center-block">
              <Link to={`beers/${beer.id}`}>
                <button type="button" className="btn btn-primary btn-sm">
                  View details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beer;
