import * as actions from "../../actions/StampsActions";
import * as types from "../../actions/types";

describe("actions", () => {
  it("fetch stamps to return function", () => {
    expect(typeof actions.fetchStamps()).toBe("function");
  });
});
