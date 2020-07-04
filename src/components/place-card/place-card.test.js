import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

it(`Render PlaceCard`, () => {
  const tree = renderer.
    create(
        <PlaceCard offer={testOffer}
          onPlaceHeaderClick={() => {}}
          handleCardPointerEnter = {() => {}}
          handleCardPointerLeave = {() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
