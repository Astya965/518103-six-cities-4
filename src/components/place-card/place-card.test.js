import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

describe(`Render PlaceCard`, () => {
  it(`Render PlaceCard with isMainView=true`, () => {
    const tree = renderer.
      create(
          <PlaceCard offer={testOffer}
            isMainView={true}
            onPlaceHeaderClick={() => {}}
            handleCardPointerEnter = {() => {}}
            handleCardPointerLeave = {() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render PlaceCard isMainView=false`, () => {
    const tree = renderer.
      create(
          <PlaceCard offer={testOffer}
            isMainView={false}
            onPlaceHeaderClick={() => {}}
            handleCardPointerEnter = {() => {}}
            handleCardPointerLeave = {() => {}}
          />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
