import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BeerContainer from './containers/BeerContainer';
import Beer from './components/Beer';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BeerContainer} />
          <Route exact path="/beers" component={BeerContainer} />
          <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />
          <Route exact path="/beers/:id" component={Beer} />

          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
