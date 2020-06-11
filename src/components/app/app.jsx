import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offers} = props;

  return <Main offers={offers}/>;

};

export default App;
