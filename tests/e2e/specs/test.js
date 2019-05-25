const getEmployerInput = () =>
  cy.get(":nth-child(2) > .wrapper > form > [type='number']");
const getEmployerSubmit = () =>
  cy.get(":nth-child(2) > .wrapper > form > [type='submit']");

const getEmployeeInput = () =>
  cy.get("[style=''] > .wrapper > form > [type='number']");
const getEmployeeSubmit = () => cy.get(" .wrapper > form > [type='submit']");

describe("Vue.js salary negotiator", () => {
  it("should render the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Vue.js salary negotatior");
  });
  it("user should not be able to submit invalid salary values (negative, non numeric...)", () => {
    const letterString = "asdfdsfsadfas";
    const nonNumericValue = "10.50.1";
    const negativeValue = "-100";

    cy.visit("/");

    cy.contains("Employer-Tab").click();
    getEmployerInput().type(letterString);
    getEmployerSubmit().click();
    cy.contains("Employer offer submitted!").should("not.exist");
    getEmployerInput().clear();

    getEmployerInput().type(nonNumericValue);
    getEmployerSubmit().click();
    cy.contains("Employer offer submitted!").should("not.exist");
    getEmployerInput().clear();

    getEmployerInput().type(negativeValue);
    getEmployerSubmit().click();
    cy.contains("Employer offer submitted!").should("not.exist");
    getEmployerInput().clear();
  });
  it("should succed when offer and expectations meet", () => {
    const employerOffer = 55000;
    const employeeExpectation = 50000;

    cy.visit("/");

    cy.contains("Employer-Tab").click();
    getEmployerInput().type(employerOffer);
    getEmployerSubmit().click();
    cy.contains("Employer offer submitted!");

    cy.contains("Employee-Tab").click();
    getEmployeeInput().type(employeeExpectation);
    getEmployeeSubmit().click();
    cy.contains("Employee salary expectation submitted!");

    cy.contains("h2", "Success");

    cy.contains("OK").click();
  });
  it("should fail when offer and expectations dont meet", () => {
    const employerOffer = 50000;
    const employeeExpectation = 55000;

    cy.visit("/");

    cy.contains("Employer-Tab").click();
    getEmployerInput().type(employerOffer);
    getEmployerSubmit().click();
    cy.contains("Employer offer submitted!");

    cy.contains("Employee-Tab").click();
    getEmployeeInput().type(employeeExpectation);
    getEmployeeSubmit().click();
    cy.contains("Employee salary expectation submitted!");

    cy.contains("h2", "Failure");

    cy.contains("OK").click();
  });
});
