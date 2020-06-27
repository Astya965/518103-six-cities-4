import React from "react";
import renderer from "react-test-renderer";

import {testReview} from "../../mocks/test-mocks.js";

import Review from "./review.jsx";

it(`Render Review`, () => {
  const tree = renderer.
    create(
        <Review review={testReview} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
