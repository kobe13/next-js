describe("e2e test Homepage", () => {
  it("should display welcome message", () => {
    cy.visit(Cypress.config("baseUrl") as string);

    cy.contains("Get started").should("be.visible");
  });
});
