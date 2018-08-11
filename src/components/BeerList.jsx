import React from 'react';
import { Link } from 'react-router-dom';
import apiUrl from '../config';

const BeerList = ({ beers }) => (
  <div>
    <table className="table">
      <thead>
        <tr>
          <td />
          <td>Name</td>
          <td>Brewery</td>
          <td>Rating</td>
        </tr>
      </thead>
      <tbody>
        {beers.map(beer => (
          <tr key={beer.id}>
            <td>
              <img src={`${apiUrl()}${beer.thumbnailImageUrl}`} />
            </td>
            <td>
              <Link to={`/beers/${beer.id}`}>{beer.name}</Link>
            </td>
            <td>{beer.brewery.name}</td>
            <td>{beer.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BeerList;
