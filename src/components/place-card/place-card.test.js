import React from "react";
import renderer from "react-test-renderer";

import PlaceCard from "./place-card.jsx";

const testOffer = {
  id: `1`,
  isPremium: true,
  isFavourite: true,
  previewImage: `img/apartment-01.jpg`,
  price: 55,
  rating: 4.8,
  type: `Apartment`,
  title: `Test name-1`,
};

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
