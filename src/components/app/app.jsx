import React, {Component} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';

import {ActionCreator} from "../../store/cities/actions.js";
import {getCurrentOffers} from "../../store/offers/selectors.js";
import {getCurrentOffer, getCurrentCity, getCities} from "../../store/cities/selectors.js";

import {CITIES} from "../../utils/constants.js";
import {offerShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.onCityNameClick = this.onCityNameClick.bind(this);
  }

  onCityNameClick(city) {
    const {setCurrentCity} = this.props;
    setCurrentCity(city);
  }

  render() {
    const {offers, currentOffer, cities, currentCity} = this.props;

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {currentOffer !== null ?
              <PlaceDetails offer={currentOffer}
                offers={offers}
                city={currentCity} /> :
              <Main offers={offers}
                cities={cities}
                city={currentCity}
                onCityNameClick={this.onCityNameClick} />
            }
          </Route>
          <Route exact path="/dev-component">
            <PlaceDetails offer={offers[0]}
              offers={offers}
              city={currentCity} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  offers: getCurrentOffers(state),
  cities: getCities(state),
  currentOffer: getCurrentOffer(state),
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = {
  setCurrentCity: ActionCreator.setCurrentCity,
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  currentOffer: PropTypes.shape(offerShape),
  cities: PropTypes.arrayOf(PropTypes.oneOf(CITIES)).isRequired,
  currentCity: PropTypes.oneOf(CITIES).isRequired,
  setCurrentCity: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
