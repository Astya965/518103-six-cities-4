import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer.
    create(
        <App offers={testOffers}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();

});
