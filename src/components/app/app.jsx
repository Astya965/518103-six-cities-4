import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offers, placeTitles} = props;

  return <Main offers={offers} placeTitles={placeTitles}/>;

};

export default App;
