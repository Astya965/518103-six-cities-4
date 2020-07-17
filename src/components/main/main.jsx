import React from "react";
import PropTypes from "prop-types";

import {offerShape} from "../../utils/prop-types.js";
import {ViewMode, CITIES} from "../../utils/constants.js";

import Locations from "../locations/locations.jsx";
import PlacesSort from "../places-sort/places-sort.jsx";
import PlacesMap from "../places-map/places-map.jsx";
import PlacesList from "../places-list/places-list.jsx";

const Main = (props) => {
  const {offers, cities, city, onCityNameClick} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations cities={cities} activeCity={city} onCityNameClick={onCityNameClick}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <PlacesSort />
              <PlacesList offers={offers}
                viewMode={ViewMode.Main} />
            </section>
            <div className="cities__right-section">
              <PlacesMap offers={offers} viewMode={ViewMode.Main} city={offers[0].city}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
  cities: PropTypes.arrayOf(PropTypes.oneOf(CITIES)).isRequired,
  city: PropTypes.oneOf(CITIES).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};

export default Main;
