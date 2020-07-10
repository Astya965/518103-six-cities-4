import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";
import {testOffers, testReviews} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

const mockStore = configureStore([]);

it(`Render App`, () => {
  const store = mockStore({
    CITIES: {
      cities: CITIES,
      activeCity: CITIES[0],
      currentOffer: testOffers[0],
    },
    DATA: {
      offers: testOffers,
    },
    REVIEWS: {
      reviews: testReviews
    }
  });

  const tree = renderer.
    create(
        <Provider store={store}>
          <App />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();

});
