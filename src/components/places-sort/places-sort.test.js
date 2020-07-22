import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

import PlacesSort from "./places-sort.jsx";

import {testStore} from "../../mocks/test-mocks.js";

const mockStore = configureStore([]);
const store = mockStore(testStore);

it(`Render PlaceGallery`, () => {
  const tree = renderer.
    create(
        <Provider store={store}>
          <PlacesSort
            isActive={true}
            onActiveChange={() => {}}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
