//mapProperties maps the required properties only.
import mapProperties from "./mapProperties";

let firstname: string = undefined,
  lastname: string = undefined;

describe("mapProperties()", () => {
  const source = { nonexistent: "hello", firstname: "David", lastname: "Morrison" };

  test("maps properties which exist on the object", () => {
    let target = {
      firstname,
      lastname
    };

    mapProperties.call(target, source);

    expect(target.firstname).toEqual(source.firstname);
    expect(target.lastname).toEqual(source.lastname);
  });

  test("does not map properties which do not exist on the object", () => {
    let target = {
      firstname
    };

    mapProperties.call(target, source);

    //@ts-ignore
    expect(target.nonexistent).toBe(undefined);
    //@ts-ignore
    expect(target.lastname).toBe(undefined);
  });
});
