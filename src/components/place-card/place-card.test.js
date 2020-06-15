import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";

const testOffer = {
  id: `1`,
  title: `Test name-1`,
};

it(`Render PlaceCard`, () => {
  const tree = renderer.
    create(
        <PlaceCard offer={testOffer}
          onPlaceHeaderClick={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
