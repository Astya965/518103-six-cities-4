import React from "react";
import renderer from "react-test-renderer";

import PlaceDetails from "./place-details.jsx";
import {testOffer, testOffers} from "../../mocks/test-mocks.js";

it(`Render PlaceDetails`, () => {
  const tree = renderer.
    create(
        <PlaceDetails offer={testOffer} offers={testOffers}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
