import React from "react";
import {shallow} from "enzyme";

import withStatus from "./with-status.jsx";

const Component = () => (<div />);
const ComponentWithStatus = withStatus(Component);

it(`Component should change status after activation`, () => {
  const componentWithStatus = shallow(<ComponentWithStatus />);
  const prevState = componentWithStatus.state(`isActive`);

  componentWithStatus.props().onActiveChange();

  expect(componentWithStatus.state(`isActive`)).toBe(!prevState);
});
