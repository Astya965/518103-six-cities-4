import React from "react";
import renderer from "react-test-renderer";

import PlacesMap from "./places-map.jsx";

it(`Render PlacesMap`, () => {
  const tree = renderer.
    create(
        <PlacesMap />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
