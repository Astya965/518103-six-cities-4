import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import Main from "./main.jsx";
import {CITIES} from "../../utils/constants.js";
import {testOffers} from "../../mocks/test-mocks.js";

const mockStore = configureStore([]);

it(`Render Main`, () => {
  const store = mockStore({});

  const tree = renderer.
    create(
        <Provider store={store}>
          <Main
            offers={testOffers}
            cities={CITIES}
            city={CITIES[0]}
            onCityNameClick={() => {}}/>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
