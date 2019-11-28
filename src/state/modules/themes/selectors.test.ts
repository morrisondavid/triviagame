import { newState } from "state/initialState";
import { isSnowEnabled } from "./selectors";

/*
 * N.B. Additional tests have been ommitted
 * for the sake of time
 */
describe("Themes selectors", () => {
  test("isSnowEnabled", () => {
    const state = newState();
    state.snowThemeSelected = true;

    expect(isSnowEnabled(state)).toBe(true);
  });
});
