import React from "react";
import { shallow } from "enzyme";

import Pagination, { Step } from "../../reusables/Pagination";

describe("<Pagination />", () => {
  let props = {};

  beforeEach(() => {
    props = { currentIndex: 10, maxPages: 20, onChange: jest.fn() };
  });

  it("renders next, prev, ...", () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper.contains("Edellinen")).toBe(true);
    expect(wrapper.contains("Seuraava")).toBe(true);
    expect(wrapper.contains("...")).toBe(true);
  });

  it("has default props", () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper.instance().props.spread).toBe(2);
  });

  it("calls func on button clicks", () => {
    const wrapper = shallow(<Pagination {...props} />);
    wrapper
      .find(".next")
      .first()
      .simulate("click");
    expect(props.onChange).toHaveBeenLastCalledWith(11);

    wrapper
      .find(".prev")
      .first()
      .simulate("click");
    expect(props.onChange).toHaveBeenLastCalledWith(9);

    wrapper
      .find(".step-9")
      .first()
      .simulate("click");
    expect(props.onChange).toHaveBeenLastCalledWith(9);

    wrapper
      .find(".step-12")
      .first()
      .simulate("click");
    expect(props.onChange).toHaveBeenLastCalledWith(12);
  });
});
