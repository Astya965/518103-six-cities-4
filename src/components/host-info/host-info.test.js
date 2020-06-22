import React from "react";
import renderer from "react-test-renderer";

import HostInfo from "./host-info.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

it(`Render PlaceDetails`, () => {
  const tree = renderer.
    create(
        <HostInfo host={testOffer.host} />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
