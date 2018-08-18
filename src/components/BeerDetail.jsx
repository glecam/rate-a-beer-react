import React, { Component } from 'react';
import api from '../api';
import apiUrl from '../config';
import Map from './Map';

export default class BeerDetail extends Component {
  state = {
    hasError: false,
  };

  componentDidMount() {
    this.loadBeer();
  }

  loadBeer = async () => {
    const id = parseInt(this.props.match.params.id, 10);

    try {
      const result = await api.get(`/beers/${id}`);
      this.setState(state => ({
        ...state,
        beer: result.data,
      }));
    } catch (error) {
      this.setState(state => ({
        ...state,
        hasError: true,
      }));
    }
  };

  render() {
    const { beer, hasError } = this.state;

    if (hasError) {
      return (
        <div>
          Sorry, the beer with id {this.props.match.id} could not be found
        </div>
      );
    }

    return (
      <div>
        {this.state &&
          this.state.beer && (
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <div className="card">
                  <div className="box">
                    <div className="icon">
                      <div className="image">
                        <img
                          src={`${apiUrl()}${beer.thumbnailImageUrl}`}
                          className="img-circle"
                        />
                      </div>
                    </div>
                    <div className="card-block">
                      <h4 className="card-title">{beer.name}</h4>
                      <div className="meta">
                        Brewed by &ldquo;{beer.brewery.name}&rdquo;
                      </div>
                      <div className="card-text">{beer.brewery.address}</div>
                      <div className="card-text">
                        {beer.brewery.city} - {beer.brewery.country}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <Map
                  center={`${beer.brewery.address}, ${beer.brewery.city} ${
                    beer.brewery.country
                  }`}
                />
              </div>
            </div>
          )}
      </div>
    );
  }
}
