import React from "react";
import Main from "../main/main.jsx";

const App = (props) => {
  const {offers} = props;

  return <Main offers={offers}/>;

};

export default App;
