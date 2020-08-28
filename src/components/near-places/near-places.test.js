import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import NearPlaces from "./near-places.jsx";
import {testOffers} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

const mockStore = configureStore([]);

it(`Render NearPlaces`, () => {
  const store = mockStore({});

  const tree = renderer.
    create(
        <Provider store={store}>
          <NearPlaces
            offers={testOffers}
            viewMode={ViewMode.PlaceDetails} />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
