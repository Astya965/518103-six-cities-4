import React from "react";
import renderer from "react-test-renderer";

import PlaceInfo from "./place-info.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

it(`Render PlaceInfo`, () => {
  const tree = renderer.
    create(
        <PlaceInfo offer={testOffer}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
