describe('Auth Flow', () => {
    it('Register a new user', () => {
      cy.visit('/');
      cy.get('#username').type('cypressuser');
      cy.get('#password').type('testpass');
      cy.get('#register').click();
      cy.contains('Successful registration');
    });
  
    it('Login with existing user', () => {
      cy.visit('/');
      cy.get('#username').type('cypressuser');
      cy.get('#password').type('testpass');
      cy.get('#login').click();
      cy.contains('Login successful');
    });
  
    it('Change password', () => {
      cy.visit('/dashboard.html');
      cy.get('#new-password').type('newpass');
      cy.get('#change-password').click();
      cy.contains('Password changed');
    });
  });
  