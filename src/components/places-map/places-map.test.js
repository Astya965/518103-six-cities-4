import React from "react";
import renderer from "react-test-renderer";

import PlacesMap from "./places-map.jsx";

import {testOffers} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

it(`Render PlacesMap`, () => {
  const tree = renderer.
    create(
        <PlacesMap offers={testOffers} viewMode={ViewMode.Main}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
