import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import PlacesContainer from "./places-container.jsx";
import {testOffers, testStore} from "../../mocks/test-mocks.js";
import {CITIES} from "../../utils/constants.js";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Render PlacesContainer`, () => {
  const tree = renderer.
    create(
        <Provider store={store}>
          <PlacesContainer offers={testOffers} city={CITIES[3]}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
