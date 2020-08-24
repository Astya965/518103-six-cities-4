import React, {Component} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';

import {ActionCreator as CitiesActionCreator} from "../../store/cities/actions.js";
import {ActionCreator as ReviewsActionCreator} from "../../store/reviews/actions.js";
import {ActionCreator as OffersActionCreator} from "../../store/offers/actions.js";
import {getCurrentOffers, getCurrentOffer} from "../../store/offers/selectors.js";
import {getCurrentCity, getCities} from "../../store/cities/selectors.js";

import {offers as loadedOffers} from "../../mocks/offer.js";
import {CITIES} from "../../utils/constants.js";
import {offerShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.onCityNameClick = this.onCityNameClick.bind(this);
    this.onReviewsLoad = this.onReviewsLoad.bind(this);
  }

  componentDidMount() {
    this.props.loadOffers(loadedOffers);
  }

  onCityNameClick(city) {
    this.props.setCurrentCity(city);
  }

  onReviewsLoad(reviews) {
    this.props.loadReviews(reviews);
  }

  render() {
    const {offers, currentOffer, cities, currentCity} = this.props;

    return offers.length > 0 ? (
      <Router>
        <Switch>
          <Route exact path="/">
            {currentOffer !== null ?
              <PlaceDetails offer={currentOffer}
                offers={offers}
                city={currentCity}
                loadReviews={this.onReviewsLoad} /> :
              <Main offers={offers}
                cities={cities}
                city={currentCity}
                onCityNameClick={this.onCityNameClick} />
            }
          </Route>
          <Route exact path="/dev-component">
            <PlaceDetails offer={offers[0]}
              offers={offers}
              city={currentCity}
              loadReviews={this.onReviewsLoad} />
          </Route>
        </Switch>
      </Router>
    ) : ``;
  }
}

const mapStateToProps = (state) => ({
  offers: getCurrentOffers(state),
  cities: getCities(state),
  currentOffer: getCurrentOffer(state),
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = {
  setCurrentCity: CitiesActionCreator.setCurrentCity,
  loadReviews: ReviewsActionCreator.loadReviews,
  loadOffers: OffersActionCreator.loadOffers,
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  currentOffer: PropTypes.shape(offerShape),
  cities: PropTypes.arrayOf(PropTypes.oneOf(CITIES)).isRequired,
  currentCity: PropTypes.oneOf(CITIES).isRequired,
  setCurrentCity: PropTypes.func.isRequired,
  loadReviews: PropTypes.func.isRequired,
  loadOffers: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
