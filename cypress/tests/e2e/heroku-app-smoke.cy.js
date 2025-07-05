import HerokuHomePage from '../../pages/HerokuHomePage';

describe("Heroku App - Smoke Suite", () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it("should load the homepage and validate title and basic elements", () => {
        cy.title().should("eq", "The Internet");
        HerokuHomePage.headerTitle.should("contain", "Welcome to the-internet");
        HerokuHomePage.subHeaderTitle.should("contain", "Available Examples");
    });
});
