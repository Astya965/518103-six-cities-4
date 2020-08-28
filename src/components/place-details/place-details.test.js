import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import PlaceDetails from "./place-details.jsx";
import {testOffer, testOffers, testReviews, testStoreWithCurrentOffer} from "../../mocks/test-mocks.js";

const mockStore = configureStore([]);

it(`Render PlaceDetails`, () => {
  const store = mockStore(testStoreWithCurrentOffer);

  const tree = renderer.
    create(
        <Provider store={store}>
          <PlaceDetails
            offer={testOffer}
            offers={testOffers}
            reviews={testReviews}
            loadReviews={() => {}} />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
