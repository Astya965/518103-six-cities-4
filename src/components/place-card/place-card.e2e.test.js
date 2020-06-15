import React from "react";
import {shallow} from "enzyme";

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

describe(`PlaceCard tests`, () => {

  const onPlaceHeaderClick = jest.fn();

  const placeComponent = shallow(
      <PlaceCard offer={testOffer}
        onPlaceHeaderClick={onPlaceHeaderClick}
      />
  );

  it(`Should title be pressed`, () => {

    const placeTitle = placeComponent.find(`h2.place-card__name a`);

    placeTitle.simulate(`click`);
    expect(onPlaceHeaderClick).toHaveBeenCalledTimes(1);
  });

});
