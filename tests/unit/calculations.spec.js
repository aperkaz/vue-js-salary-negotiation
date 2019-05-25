import { doExpectationsMatch } from "../../src/utils/calculations";

describe("Test negotiation match logic", () => {
  it("should match when employer offer is greater than employee expectation", () => {
    const employerOffer = 100;
    const employeeExpectation = 50;

    expect(doExpectationsMatch(employerOffer, employeeExpectation)).toEqual(
      true
    );
  });
  it("should match when employer offer is equal to employee expectation", () => {
    const employerOffer = 100;
    const employeeExpectation = 100;

    expect(doExpectationsMatch(employerOffer, employeeExpectation)).toEqual(
      true
    );
  });
  it("should not match when employer offer is less than employee expectation", () => {
    const employerOffer = 50;
    const employeeExpectation = 100;

    expect(doExpectationsMatch(employerOffer, employeeExpectation)).toEqual(
      false
    );
  });
});
