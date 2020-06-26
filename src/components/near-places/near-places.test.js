import React from "react";
import renderer from "react-test-renderer";

import NearPlaces from "./near-places.jsx";

it(`Render NearPlaces`, () => {
  const tree = renderer.
    create(
        <NearPlaces />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
