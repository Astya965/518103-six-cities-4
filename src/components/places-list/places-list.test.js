import React from "react";
import renderer from "react-test-renderer";

import PlacesList from "./places-list.jsx";

const testOffers = [
  {
    id: `1`,
    isPremium: true,
    isFavourite: true,
    previewImage: `img/apartment-01.jpg`,
    price: 55,
    rating: 4.8,
    type: `Apartment`,
    title: `Test name-1`,
  },
  {
    id: `2`,
    isPremium: false,
    isFavourite: false,
    previewImage: `img/apartment-02.jpg`,
    price: 250,
    rating: 2,
    type: `Room`,
    title: `Test name-2`
  }
];

it(`Render PlacesList`, () => {

  const tree = renderer.
    create(
        <PlacesList offers={testOffers}
          placeHeaderClickHandler={() => {}}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});