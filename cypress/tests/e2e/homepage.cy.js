/// <reference types="cypress" />
import HomePage from '../../pages/homepage';

describe('Homepage Tests', () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display web inputs card', () => {
    homePage.webInputsCard().should('be.visible');
  });
});
