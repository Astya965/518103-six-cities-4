import React from "react";
import {shallow} from "enzyme";

import PlaceCard from "./place-card.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

describe(`PlaceCard tests`, () => {

  const onPlaceHeaderClick = jest.fn();
  const handleCardPointerEnter = jest.fn();
  const handleCardPointerLeave = jest.fn();

  const placeComponent = shallow(
      <PlaceCard offer={testOffer}
        onPlaceHeaderClick={onPlaceHeaderClick}
        handleCardPointerEnter = {handleCardPointerEnter}
        handleCardPointerLeave = {handleCardPointerLeave}
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
    expect(handleCardPointerEnter).toHaveBeenCalledTimes(1);
    expect({value: handleCardPointerEnter.mock.calls[0][0]}).toMatchObject({value: testOffer});
  });

  it(`Should get null on pointer leave`, () => {
    placeCard.simulate(`pointerleave`);
    expect(handleCardPointerLeave).toHaveBeenCalledTimes(1);
  });

});
