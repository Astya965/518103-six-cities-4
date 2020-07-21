import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

import App from "./components/app/app.jsx";

import {offers} from "./mocks/offer.js";
import {reviews} from "./mocks/review.js";

import reducer from "./store/reducer.js";
import {ActionCreator as DataActionCreator} from './store/offers/offers.js';
import {ActionCreator as ReviewsActionCreator} from './store/reviews/reviews.js';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

store.dispatch(DataActionCreator.loadOffers(offers));
store.dispatch(ReviewsActionCreator.loadReviews(reviews));
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
