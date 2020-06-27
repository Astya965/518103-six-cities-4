import React from "react";
import renderer from "react-test-renderer";

import App from "./app.jsx";
import {testOffers, testReviews} from "../../mocks/test-mocks.js";

it(`Render App`, () => {
  const tree = renderer.
    create(
        <App offers={testOffers} reviews={testReviews}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();

});
