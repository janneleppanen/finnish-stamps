import React from "react";
import { shallow } from "enzyme";

import Heading from "../../reusables/Heading";

it("renders content", () => {
  const wrapper = shallow(<Heading>This is a title</Heading>);
  expect(wrapper.contains("This is a title")).toBe(true);
});

it("renders correct h1 element", () => {
  const wrapper = shallow(<Heading>This is a title</Heading>);
  expect(wrapper.find("h1").length).toBe(1);
});
