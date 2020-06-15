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
  const onCardPointerEnter = jest.fn();
  const onCardPointerLeave = jest.fn();

  const placeComponent = shallow(
      <PlaceCard offer={testOffer}
        onPlaceHeaderClick={onPlaceHeaderClick}
      />
  );

  const placeCard = placeComponent.find(`article.place-card`);

  it(`Should title be pressed`, () => {

    const placeTitle = placeComponent.find(`h2.place-card__name a`);

    placeTitle.simulate(`click`);
    expect(onPlaceHeaderClick).toHaveBeenCalledTimes(1);
  });

  it(`Should get offer ID on pointer enter`, () => {
    placeCard.simulate(`pointerenter`);
    expect(onCardPointerEnter).toHaveBeenCalledTimes(1);
    expect({value: onCardPointerEnter.mock.call[0][0]}).toMatchObject({value: testOffer});
  });

  it(`Should get null on pointer leave`, () => {
    placeCard.simulate(`pointerleave`);
    expect(onCardPointerLeave).toHaveBeenCalledTimes(1);
  });

});
