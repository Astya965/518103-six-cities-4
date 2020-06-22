import React from "react";
import renderer from "react-test-renderer";

import ReviewForm from "./review-form.jsx";

it(`Render ReviewForm`, () => {
  const tree = renderer.
    create(
        <ReviewForm />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
