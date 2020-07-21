import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";
import {testOffers, testReviews, testStore} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

const mockStore = configureStore([]);
const store = mockStore(testStore);

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
            setCurrentCity={() => {}}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();

});
