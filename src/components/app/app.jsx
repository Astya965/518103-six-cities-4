import React, {Component} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {offerShape, reviewShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentOffer: null
    };

    this.placeHeaderClickHandler = this.placeHeaderClickHandler.bind(this);
  }

  placeHeaderClickHandler(offer) {
    this.setState({
      currentOffer: offer
    });
  }

  render() {
    const {offers, reviews} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this.state.currentOffer ?
              <PlaceDetails offer={this.state.currentOffer} offers={offers}
                reviews={reviews}
                placeHeaderClickHandler={this.placeHeaderClickHandler} /> :
              <Main offers={offers}
                placeHeaderClickHandler={this.placeHeaderClickHandler} />
            }
          </Route>
          <Route exact path="/dev-component">
            <PlaceDetails offer={offers[0]} offers={offers}
              reviews={reviews}
              placeHeaderClickHandler={this.placeHeaderClickHandler} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)).isRequired,
};

export default App;
