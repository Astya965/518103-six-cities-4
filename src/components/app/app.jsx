import React from "react";
import PropTypes from "prop-types";

import {offerShape} from "../../utils/prop-types.js";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offers} = props;

  return <Main offers={offers}/>;

};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(offerShape)).isRequired,
};

export default App;
