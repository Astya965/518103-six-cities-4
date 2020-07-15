import React, {Component} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';

import {ActionCreator} from "../../store/cities/cities.js.js";
import {getReviews} from "../../store/reviews/selector.js.js";
import {getCurrentOffers} from "../../store/data/selector.js.js";
import {getCurrentOffer, getActiveCity, getCities} from "../../store/cities/selector.js.js";

import {CITIES} from "../../utils/constants.js";
import {offerShape, reviewShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, currentOffer, reviews, cities, currentCity, onCityNameClick} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {currentOffer !== null ?
              <PlaceDetails offer={currentOffer}
                offers={offers}
                city={currentCity}
                reviews={reviews} /> :
              <Main offers={offers}
                cities={cities}
                city={currentCity}
                onCityNameClick={onCityNameClick} />
            }
          </Route>
          <Route exact path="/dev-component">
            <PlaceDetails offer={offers[0]}
              offers={offers}
              city={currentCity}
              reviews={reviews} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: getCurrentOffers(state),
  reviews: getReviews(state),
  cities: getCities(state),
  currentOffer: getCurrentOffer(state),
  currentCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityNameClick(city) {
    dispatch(ActionCreator.setCurrentCity(city));
  }
});

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  currentOffer: PropTypes.shape(offerShape),
  cities: PropTypes.arrayOf(PropTypes.oneOf(CITIES)).isRequired,
  currentCity: PropTypes.oneOf(CITIES).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewShape)).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
