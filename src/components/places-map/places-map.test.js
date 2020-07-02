import React from "react";
import renderer from "react-test-renderer";

import PlacesMap from "./places-map.jsx";

import {testOffers, testOffer} from "../../mocks/test-mocks.js";
import {ViewMode} from "../../utils/constants.js";

describe(`Render PlacesMap`, () => {
  it(`Render PlacesMap with ViewMode.Main`, () => {
    const tree = renderer.
    create(
        <PlacesMap offers={testOffers} viewMode={ViewMode.Main}/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render PlacesMap with ViewMode.PlaceDetails`, () => {
    const tree = renderer.
    create(
        <PlacesMap offers={testOffers} viewMode={ViewMode.PlaceDetails} activeOffer={testOffer} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
