describe("Heroku App - Smoke Suite @smoke", () => {

    beforeEach(async () => {
        cy.visit("/");
    });

    it("should load the homepage and validate title and basic elements", async () => {
        cy.title().should("eq", "The Internet");
        cy.get("h1").should("contain", "Welcome to the-internet");
        cy.get("h2").should("contain", "Available Examples");
    });
});
