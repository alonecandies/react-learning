import photoReducer, {
  addPhoto
} from "./photoSlice";

describe("add photo", () => {
  const initialState = {
    value: 3,
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(photoReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });

  it("should handle increment", () => {
    const actual = photoReducer(initialState, addPhoto());
    expect(actual.value).toEqual(4);
  });

});
