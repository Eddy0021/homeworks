/// <reference types="cypress" />

context('Search functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173/');
    });
  
    it('should allow searching with Enter key', () => {
      const searchTerm = 'Cypress E2E Testing';

      cy.get('.search-field__input').type(searchTerm);
  
      cy.get('.search-field__input').type('{enter}');
  
      cy.get('p').should('contain.text', '0 movie found');

    });
  
    it('should allow searching with the Search button', () => {
      const searchTerm = 'Cypress Button Test';
  
      cy.get('.search-field__input').type(searchTerm);
  
      cy.get('.search__field button').click();

      cy.get('p').should('contain.text', '0 movie found');
    });
  });
  