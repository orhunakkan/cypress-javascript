/// <reference types="cypress" />

class HomePage {
  constructor() {
    this.webInputsCard = () => cy.findByRole('link', { name: 'Web inputs' });
  }
}

export default HomePage;
