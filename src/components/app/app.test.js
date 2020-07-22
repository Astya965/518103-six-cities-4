import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import App from "./app.jsx";
<<<<<<< HEAD
import {testOffers, testOffer, testStore, testStoreWithCurrentOffer} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

const mockStore = configureStore([]);
=======
import {testOffers, testReviews, testStore} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

const mockStore = configureStore([]);
const store = mockStore(testStore);
>>>>>>> test(5-2): update tests

describe(`Render App`, () => {
  it(`Render App without currentOffer`, () => {
    const store = mockStore(testStore);

    const tree = renderer.
    create(
        <Provider store={store}>
          <App
            offers={testOffers}
            currentOffer={null}
            cities={CITIES}
            currentCity={CITIES[0]}
            setCurrentCity={() => {}}/>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render App with currentOffer`, () => {
    const store = mockStore(testStoreWithCurrentOffer);

    const tree = renderer.
    create(
        <Provider store={store}>
          <App
            offers={testOffers}
            currentOffer={testOffer}
            cities={CITIES}
            currentCity={CITIES[3]}
            setCurrentCity={() => {}}/>
        </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
