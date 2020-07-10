import React from "react";
import renderer from "react-test-renderer";

import {CITIES} from "../../utils/constants.js";
import Locations from "./locations.jsx";

it(`Render Locations`, () => {
  const tree = renderer.
    create(
        <Locations cities={CITIES} activeCity={CITIES[0]} onCityNameClick={() => {}} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
