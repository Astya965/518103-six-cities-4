import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {offerShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";
import PlaceDetails from "../place-details/place-details.jsx";

class App extends PureComponent {
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

  _renderMain() {
    const {offers} = this.props;

    return <Main offers={offers}
      placeHeaderClickHandler={this.placeHeaderClickHandler} />;
  }

  _renderPlaceDetails() {
    if (!this.state.currentOffer) {
      return this._renderMain();
    }

    return <PlaceDetails offer={this.state.currentOffer} />;
  }

  _renderScreen() {
    if (this.state.currentOffer) {
      return (
        this._renderPlaceDetails()
      );
    }
    return this._renderMain();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {this._renderScreen()}
          </Route>
          <Route exact path="/dev-component">
            {this._renderPlaceDetails()}
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

export default App;
