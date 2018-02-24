import React from "react";
import { shallow } from "enzyme";

import Container from "../../reusables/Container";

it("renders children", () => {
  const wrapper = shallow(
    <Container>
      <p>content...</p>
    </Container>
  );
  expect(wrapper.contains("content...")).toBe(true);
});
