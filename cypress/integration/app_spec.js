describe('Application', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:3000');
      cy.contains('GoDaddy');
    });
    it('loads list of repositories from GoDaddy account', () => {
      cy.wait(1000);
      cy.get('a').contains('gdapi-php');
    });
    it('navigates to single repository view', () => {
        cy.get('a').contains('gdapi-php').click();
        cy.get('h1').contains('gdapi-php');
    });
    it('navigates back to repo list', () => {
        cy.wait(1000);
        cy.get('a').contains('Back').click();
        cy.contains('GoDaddy');
    });
  })