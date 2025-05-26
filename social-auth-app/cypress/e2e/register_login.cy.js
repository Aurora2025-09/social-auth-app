describe("Login and Register", () => {
    beforeEach(() => {
      cy.visit("/index.html");
    });
  
    it("Register a new user", () => {
      cy.get("#register-username").type("tesztuser");
      cy.get("#register-password").type("jelszo123");
      cy.get("#register-btn").click();
  
      cy.get("#message").should("contain", "successful"); // "Registration successful"
    });
  
    it("Login username", () => {
      cy.get("#login-username").type("tesztuser");
      cy.get("#login-password").type("jelszo123");
      cy.get("#login-btn").click();
  
      cy.url().should("include", "/dashboard.html");
    });
  });