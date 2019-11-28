import DisplayText from "./DisplayText";

let testedValues = 0;

describe("DisplayText", () => {
  test("values are correct", () => {
    expect(DisplayText.WELCOME).toEqual("Welcome to the Trivia Challenge!");
    testedValues++;

    expect(DisplayText.WELCOME_EXPLANATION).toEqual(
      "You will be presented with 10 True or False questions"
    );
    testedValues++;

    expect(DisplayText.WELCOME_QUESTION).toEqual("Can you score 100%?");
    testedValues++;

    expect(DisplayText.BEGIN).toEqual("Begin");
    testedValues++;

    expect(DisplayText.SOMETHING_WENT_WRONG).toEqual("Something went wrong");
    testedValues++;

    expect(DisplayText.ERROR).toEqual("Error");
    testedValues++;

    expect(DisplayText.WHERE).toEqual("Where");
    testedValues++;

    expect(DisplayText.ON).toEqual("On");
    testedValues++;

    expect(DisplayText.OFF).toEqual("Off");
    testedValues++;

    //Assert that all values are tested
    expect(testedValues).toEqual(Object.keys(DisplayText).length);
  });
});
