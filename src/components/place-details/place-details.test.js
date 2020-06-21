import React from "react";
import renderer from "react-test-renderer";

import PlaceDetails from "./place-details.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

it(`Render PlaceDetails`, () => {
  const tree = renderer.
    create(
        <PlaceDetails offer={testOffer} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
