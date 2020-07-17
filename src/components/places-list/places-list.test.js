import React from "react";
import renderer from "react-test-renderer";

import PlacesList from "./places-list.jsx";
import {testOffers} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

describe(`Render PlacesList`, () => {

  it(`Render PlacesList with ViewMode.Main`, () => {
    const tree = renderer.
      create(
          <PlacesList offers={testOffers}
            viewMode={ViewMode.Main}
            placeHeaderClickHandler={() => {}}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render PlacesList with ViewMode.PlaceDetails`, () => {
    const tree = renderer.
      create(
          <PlacesList offers={testOffers}
            viewMode={ViewMode.PlaceDetails}
            placeHeaderClickHandler={() => {}}/>
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
