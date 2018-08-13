import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import BeerContainer from './containers/BeerContainer';
import BeerDetail from './components/BeerDetail';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 center-block">
            <Switch>
              <Route exact path="/" component={BeerContainer} />
              <Route exact path="/beers" component={BeerContainer} />
              <Route exact path="/contact" render={() => <h1>Contact Us</h1>} />

              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
