import React from "react";
import renderer from "react-test-renderer";

import PlaceGallery from "./place-gallery.jsx";
import {testOffer} from "../../mocks/test-mocks.js";

it(`Render PlaceGallery`, () => {
  const tree = renderer.
    create(
        <PlaceGallery images={testOffer.images}/>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
