import React, { Component } from 'react';
import api from '../api';

import BeerList from '../components/BeerList';

export default class BeerContainer extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    this.loadBeers();
  }

  loadBeers = async () => {
    const result = await api.get('/beers');
    this.setState(state => ({
      ...state,
      beers: result.data,
    }));
  };

  render() {
    const { beers } = this.state;
    return <BeerList beers={beers} />;
  }
}
