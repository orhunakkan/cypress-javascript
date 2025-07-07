import js from '@eslint/js';
import cypress from 'eslint-plugin-cypress';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: [
      'node_modules/',
      'cypress/videos/',
      'cypress/screenshots/',
      'cypress/cypress-reports/',
      'dist/',
      'build/',
      'coverage/',
      '**/*.html',
      '**/*.min.js',
      'package-lock.json',
      '**/*.log',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        cy: 'readonly',
        Cypress: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        beforeEach: 'readonly',
        before: 'readonly',
        afterEach: 'readonly',
        after: 'readonly',
        expect: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },
    plugins: {
      cypress,
      prettier,
    },
    rules: {
      // Prettier rules
      'prettier/prettier': 'error',

      // General JavaScript rules
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',

      // Cypress specific rules
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-async-tests': 'error',
      'cypress/no-pause': 'error',
    },
  },
  {
    files: ['cypress/**/*.js'],
    rules: {
      // Additional Cypress-specific rules for test files
      'cypress/no-async-before': 'error',
      'cypress/unsafe-to-chain-command': 'error',
    },
  },
];
