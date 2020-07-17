import React from "react";
import renderer from "react-test-renderer";

import NearPlaces from "./near-places.jsx";
import {testOffers} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

it(`Render NearPlaces`, () => {
  const tree = renderer.
    create(
        <NearPlaces
          offers={testOffers}
          viewMode={ViewMode.PlaceDetails}
          placeHeaderClickHandler={() => {}} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
