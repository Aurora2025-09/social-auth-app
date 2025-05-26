describe("Change password", () => {
    beforeEach(() => {
      cy.visit("/dashboard.html");
    });
  
    it("Changing password complete", () => {
      cy.get("#username").type("tesztuser");
      cy.get("#new-password").type("ujjelszo456");
      cy.get("#change-password-btn").click();
  
      cy.get("#message").should("contain", "sikeres"); // pl. "Password changed successfully"
    });
  });
  