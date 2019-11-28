import ErrorMessages from "./ErrorMessages";

let testedValues = 0;

describe("ErrorMessages", () => {
  test("values are correct", () => {
    expect(ErrorMessages.EXAMPLE).toEqual(
      "Descriptive error messages which help developers to find issue (not to be displayed to the user)"
    );
    testedValues++;

    expect(ErrorMessages.REDUCER_ACTION_HANDLERS_MISSING).toEqual(
      "Cannot create reducer. No action handlers could be found"
    );
    testedValues++;

    expect(ErrorMessages.NOT_IMPLEMENTED_ERROR).toEqual("The function has not been implemented");
    testedValues++;

    expect(ErrorMessages.FETCH_QUESTIONS_ERROR).toEqual("Could not retrieve questions");
    testedValues++;
  });

  test("all values tested", () => {
    //Ensure all values are tested
    expect(testedValues).toEqual(Object.keys(ErrorMessages).length);
  });
});
