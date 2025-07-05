/**
 * Logs console errors from the browser without failing the test
 */
export function logConsoleErrors() {
  cy.window().then((win) => {
    const originalError = win.console.error;
    win.console.error = function(...args) {
      console.log(`[CONSOLE ERROR] ${args.join(' ')}`);
      originalError.apply(win.console, args);
    };
  });
}

/**
 * Logs network errors (failed requests) without failing the test
 */
export function logNetworkErrors() {
  cy.intercept('**', (req) => {
    req.continue((res) => {
      if (res.statusCode >= 400) {
        console.log(`[NETWORK ERROR] ${req.method} ${req.url} - Status: ${res.statusCode}`);
      }
    });
  });
}

/**
 * Logs uncaught page errors without failing the test
 */
export function logPageErrors() {
  cy.window().then((win) => {
    win.addEventListener('error', (event) => {
      console.log(`[PAGE ERROR] ${event.error?.message || event.message}`);
    });

    win.addEventListener('unhandledrejection', (event) => {
      console.log(`[PAGE ERROR] Unhandled Promise Rejection: ${event.reason}`);
    });
  });
}
