import React from "react";
import {shallow} from "enzyme";

import PlaceCard from "./place-card.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

describe(`PlaceCard tests`, () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const onPlaceHeaderClick = jest.fn();
  const onPlaceCardHover = jest.fn();

  const renderComponent = (props = {}) => {
    return shallow(
        <PlaceCard offer={testOffer}
          onPlaceHeaderClick={onPlaceHeaderClick}
          onPlaceCardHover = {onPlaceCardHover}
          {...props}
        />);
  };

  it(`Should title be pressed`, () => {
    const placeComponent = renderComponent();
    const placeTitle = placeComponent.find(`h2.place-card__name a`);

    placeTitle.simulate(`click`);
    expect(onPlaceHeaderClick).toHaveBeenCalledTimes(1);
    expect(onPlaceHeaderClick).toHaveBeenCalledWith(testOffer);
  });

  it(`Should get offer ID on pointer enter`, () => {
    const placeComponent = renderComponent();
    const placeCard = placeComponent.find(`article.place-card`);

    placeCard.simulate(`pointerenter`);
    expect(onPlaceCardHover).toHaveBeenCalledTimes(1);
    expect(onPlaceCardHover).toHaveBeenCalledWith(testOffer);
  });

  it(`Should get null on pointer leave`, () => {
    const placeComponent = renderComponent();
    const placeCard = placeComponent.find(`article.place-card`);

    placeCard.simulate(`pointerleave`);
    expect(onPlaceCardHover).toHaveBeenCalledTimes(1);
    expect(onPlaceCardHover).toHaveBeenCalledWith(null);
  });

});
