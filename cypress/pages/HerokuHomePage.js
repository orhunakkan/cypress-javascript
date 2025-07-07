class HerokuHomePage {
  get headerTitle() {
    return cy.get('h1');
  }
  get subHeaderTitle() {
    return cy.get('h2');
  }
}

export default new HerokuHomePage();
