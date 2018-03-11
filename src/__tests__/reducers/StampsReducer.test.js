import reducer from "../../reducers/StampsReducer";
import * as types from "../../actions/types";

describe("Stamps reducer", () => {
  it("should return the intial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle STAMPS_FETCH_START", () => {
    expect(reducer([], { type: types.STAMPS_FETCH_START })).toEqual([]);
  });

  it("should handle STAMPS_FETCH_COMPLETED", () => {
    const action = {
      type: types.STAMPS_FETCH_COMPLETED,
      payload: [{ name: "Test" }]
    };
    expect(reducer([], action)).toEqual([{ name: "Test" }]);
  });
});
