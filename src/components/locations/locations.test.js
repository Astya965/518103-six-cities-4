import React from "react";
import renderer from "react-test-renderer";

import Locations from "./locations.jsx";

it(`Render Locations`, () => {
  const tree = renderer.
    create(
        <Locations />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
