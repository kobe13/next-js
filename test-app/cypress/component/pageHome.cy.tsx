import React from "react";
import Home from "../../src/app/page";

describe("component test Homepage", () => {
  it("renders", () => {
    cy.mount(<Home />);
  });
});
