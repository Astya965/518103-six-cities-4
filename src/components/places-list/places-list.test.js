import React from "react";
import renderer from "react-test-renderer";

import PlacesList from "./places-list.jsx";
import {testOffers} from "../../mocks/test-mocks.js";

it(`Render PlacesList`, () => {

  const tree = renderer.
    create(
        <PlacesList offers={testOffers}
          placeHeaderClickHandler={() => {}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
