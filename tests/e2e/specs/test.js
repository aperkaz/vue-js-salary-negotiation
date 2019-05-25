// https://docs.cypress.io/api/introduction/api.html

describe("e2e tests", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Vue.js salary negotatior");
  });
});
