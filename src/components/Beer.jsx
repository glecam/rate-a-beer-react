import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import apiUrl from '../config';

const Beer = ({ beer }) => (
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
              <td style={{ width: '29%' }}>
                <strong>Brewery:</strong>
              </td>
              <td>{beer.brewery.name}</td>
            </tr>
            <tr>
              <td style={{ width: '29%' }}>
                <strong>Rating:</strong>
              </td>
              <td>
                <StarRatingComponent
                  editing={false}
                  name="stars"
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

export default Beer;
