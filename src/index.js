import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import {offers} from "./mocks/offer.js";
import {reviews} from "./mocks/review.js";

ReactDOM.render(
    <App offers={offers} reviews={reviews}/>,
    document.querySelector(`#root`)
);
