import HerokuHomePage from '../../pages/HerokuHomePage';
import { logConsoleErrors, logNetworkErrors, logPageErrors } from '../../utilities/error-logger';

describe("Heroku App - Smoke Suite", () => {

    beforeEach(() => {
        cy.visit('/');
        logConsoleErrors();
        logNetworkErrors();
        logPageErrors();
    });

    it("should load the homepage and validate title and basic elements", () => {
        cy.title().should("eq", "The Internet");
        HerokuHomePage.headerTitle.should("contain", "Welcome to the-internet");
        HerokuHomePage.subHeaderTitle.should("contain", "Available Examples");
    });
});
