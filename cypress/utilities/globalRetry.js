/**
 * Performs an API request with retry capability
 * @param {Object} options - The request options for cy.request
 * @param {Function} validator - Validation function to run on response
 * @param {Number} maxAttempts - Maximum number of retry attempts (default: 5)
 * @returns {Cypress.Chainable} - Returns a Cypress chainable
 */
export const retryRequest = (options, validator, maxAttempts = 5) => {

    let attempts = 0;

    const makeAttempt = () => {
        attempts++;
        return cy.request(options).then(response => {
            try {
                validator(response);
                return response;
            } catch (error) {
                if (attempts >= maxAttempts) {
                    throw new Error();
                }
                return makeAttempt();
            }
        });
    };

    return makeAttempt();
};
