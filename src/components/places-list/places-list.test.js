import React from "react";
import renderer from "react-test-renderer";

import PlacesList from "./places-list.jsx";
import {testOffers} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

it(`Render PlacesList`, () => {

  const tree = renderer.
    create(
        <PlacesList offers={testOffers}
          viewMode={ViewMode.Main}
          placeHeaderClickHandler={() => {}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
