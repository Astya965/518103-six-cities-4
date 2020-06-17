import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";
import {testOffers} from "../../mocks/test-mocks.js";

it(`Render Main`, () => {
  const tree = renderer.
    create(
        <Main offers={testOffers} placeHeaderClickHandler={() => {}} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
