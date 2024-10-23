describe("e2e test Homepage", () => {
  it("should display welcome message and image", () => {
    cy.visit(Cypress.config("baseUrl") as string);

    cy.get("h1").should("be.visible").should("have.text", "Hello World");
    cy.get("img")
      .should("be.visible")
      .should("have.attr", "alt", "Next.js Logo");
  });
});
