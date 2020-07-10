import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import PlacesList from "./places-list.jsx";
import {testOffers} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

const mockStore = configureStore([]);

describe(`Render PlacesList`, () => {

  it(`Render PlacesList with ViewMode.Main`, () => {
    const store = mockStore({});

    const tree = renderer.
      create(
          <Provider store={store}>
            <PlacesList offers={testOffers}
              viewMode={ViewMode.Main}/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render PlacesList with ViewMode.PlaceDetails`, () => {
    const store = mockStore({});

    const tree = renderer.
      create(
          <Provider store={store}>
            <PlacesList offers={testOffers}
              viewMode={ViewMode.PlaceDetails}/>
          </Provider>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
