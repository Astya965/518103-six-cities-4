import React from "react";
import renderer from "react-test-renderer";

import Main from "./main.jsx";

const testOffers = [
  {
    id: `1`,
    title: `Test name-1`,
  },
  {
    id: `2`,
    title: `Test name-2`
  }
];

it(`Render Main`, () => {
  const tree = renderer.
    create(
        <Main offers={testOffers} placeHeaderClickHandler={() => {}} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
