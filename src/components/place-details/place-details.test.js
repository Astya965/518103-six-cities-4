import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import PlaceDetails from "./place-details.jsx";
import {testOffer, testOffers, testReviews} from "../../mocks/test-mocks.js";

const mockStore = configureStore([]);

it(`Render PlaceDetails`, () => {
  const store = mockStore({});

  const tree = renderer.
    create(
        <Provider store={store}>
          <PlaceDetails
            offer={testOffer}
            offers={testOffers}
            reviews={testReviews} />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
