import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {offerShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";

const placeHeaderClickHandler = () => {};

const App = (props) => {
  const {offers} = props;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main
            offers={offers}
            placeHeaderClickHandler={placeHeaderClickHandler} />
        </Route>
        <Route exact path="/dev-component">
          <PlaceDetails offer={offers[0]} />
        </Route>
      </Switch>
    </Router>
  );

};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

export default App;
