import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";

import {offers} from "./mocks/offer.js";
import {reviews} from "./mocks/review.js";
import {ActionCreator, reducer} from "./reducers/reducer.js";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(ActionCreator.loadOffers(offers));
store.dispatch(ActionCreator.setCities(offers));
store.dispatch(ActionCreator.loadReviews(reviews));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
