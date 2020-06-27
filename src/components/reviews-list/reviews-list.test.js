import React from "react";
import renderer from "react-test-renderer";

import {testReviews} from "../../mocks/test-mocks.js";

import ReviewsList from "./reviews-list.jsx";

it(`Render ReviewsList`, () => {
  const tree = renderer.
    create(
        <ReviewsList reviews={testReviews} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
