describe("e2e tests", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Vue.js salary negotatior");
  });
  it("success when offer and expectations meet", () => {
    const employerOffer = 55000;
    const employeeExpectation = 50000;

    cy.visit("/");

    cy.contains("Employer-Tab").click();
    cy.get(":nth-child(2) > .wrapper > form > [type='number']").type(
      employerOffer
    );
    cy.get(":nth-child(2) > .wrapper > form > [type='submit']").click();
    cy.contains("Employer offer submitted!");

    cy.contains("Employee-Tab").click();
    cy.get("[style=''] > .wrapper > form > [type='number']").type(
      employeeExpectation
    );
    cy.get(" .wrapper > form > [type='submit']").click();
    cy.contains("Employee salary expectation submitted!");

    cy.contains("h2", "Success");

    cy.contains("OK").click();
  });
  it("failure when offer and expectations dont meet", () => {
    const employerOffer = 50000;
    const employeeExpectation = 55000;

    cy.visit("/");

    cy.contains("Employer-Tab").click();
    cy.get(":nth-child(2) > .wrapper > form > [type='number']").type(
      employerOffer
    );
    cy.get(":nth-child(2) > .wrapper > form > [type='submit']").click();
    cy.contains("Employer offer submitted!");

    cy.contains("Employee-Tab").click();
    cy.get("[style=''] > .wrapper > form > [type='number']").type(
      employeeExpectation
    );
    cy.get(" .wrapper > form > [type='submit']").click();
    cy.contains("Employee salary expectation submitted!");

    cy.contains("h2", "Failure");

    cy.contains("OK").click();
  });
});
