import React from "react";
import renderer from "react-test-renderer";

import ReviewsList from "./reviews-list.jsx";

it(`Render ReviewsList`, () => {
  const tree = renderer.
    create(
        <ReviewsList />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
