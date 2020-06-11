import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import {offers} from "./mocks/offer.js";

ReactDOM.render(
    <App offers={offers}/>,
    document.querySelector(`#root`)
);
