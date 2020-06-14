import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const testOffer = {
  id: `1`,
  title: `Test name-1`,
};

describe(`PlaceCard tests`, () => {

  const onPlaceHeaderClick = jest.fn();

  const placeComponent = shallow(
      <PlaceCard offer={testOffer} />
  );

  it(`Should title be pressed`, () => {

    const placeTitle = placeComponent.find(`h2.place-card__name`);

    placeTitle.simulate(`click`);
    expect(onPlaceHeaderClick).toHaveBeenCalledTimes(1);
  });

});
