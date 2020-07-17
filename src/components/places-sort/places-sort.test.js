import React from "react";
import renderer from "react-test-renderer";

import PlacesSort from "./places-sort.jsx";

it(`Render PlaceGallery`, () => {
  const tree = renderer.
    create(
        <PlacesSort />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
