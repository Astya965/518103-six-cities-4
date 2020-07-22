import React from "react";
import {shallow} from "enzyme";

import withHover from "./with-hover.jsx";
import {testOffers, testOffer} from "../../mocks/test-mocks.js";
import {CITIES, ViewMode} from "../../utils/constants.js";

const Component = () => (<div />);
const ComponentWithHover = withHover(Component);

describe(`withHover should work correctly`, () => {
  it(`hoveredItem should get item when hover on`, () => {
    const componentWithHover = shallow(<ComponentWithHover
      offers={testOffers}
      currentCity={CITIES[3]}
      viewMode={ViewMode.Main}
    />);

    componentWithHover.props().onItemHover(testOffer);

    expect(componentWithHover.state(`hoveredItem`)).toBe(testOffer);
  });

  it(`hoveredItem should be null when hover out`, () => {
    const componentWithHover = shallow(<ComponentWithHover
      offers={testOffers}
      currentCity={CITIES[3]}
      viewMode={ViewMode.Main}
    />);

    componentWithHover.props().onItemHover(null);

    expect(componentWithHover.state(`hoveredItem`)).toBe(null);
  });
});
