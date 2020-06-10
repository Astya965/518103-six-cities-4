import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import {OFFERS_COUNT} from "./mocks/offer.js";

ReactDOM.render(
  <App offers={OFFERS_COUNT} />,
  document.querySelector("#root")
);
