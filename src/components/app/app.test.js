import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";
import {testOffers, testReviews} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

const mockStore = configureStore([]);
const store = mockStore({
  CITIES: {
    cities: CITIES,
    currentCity: CITIES[0],
    currentOffer: null,
  },
  DATA: {
    offers: testOffers,
  },
  REVIEWS: {
    reviews: testReviews
  }
});

it(`Render App`, () => {
  const tree = renderer.
    create(
        <Provider store={store}>
          <App
            offers={testOffers}
            currentOffer={null}
            cities={CITIES}
            currentCity={CITIES[0]}
            reviews={testReviews}
            onCityNameClick={() => {}}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();

});
