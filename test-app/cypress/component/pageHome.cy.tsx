import React from "react";
import Home from "../../src/app/page";

describe("component test Homepage", () => {
  it("renders welcome message and image", () => {
    cy.mount(<Home />);

    cy.get("h1").should("be.visible").should("have.text", "Hello World");
    cy.get("img")
      .should("be.visible")
      .should("have.attr", "alt", "Next.js Logo");
  });
});
