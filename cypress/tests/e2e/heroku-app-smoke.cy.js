import HerokuHomePage from '../../support/pages/HerokuHomePage';

describe("Heroku App - Smoke Suite", () => {

    beforeEach(async () => {
        cy.visit('/');
    });

    it("should load the homepage and validate title and basic elements", async () => {
        HerokuHomePage.title.should("eq", "The Internet");
        HerokuHomePage.headerTitle.should("contain", "Welcome to the-internet");
        HerokuHomePage.subHeaderTitle.should("contain", "Available Examples");
    });
});
