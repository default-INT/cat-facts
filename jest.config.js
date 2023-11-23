/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
})


module.exports = createJestConfig({
  preset: "ts-jest",
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.ts?(x)"],
  moduleDirectories: ['<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    "^api(.*)$": "<rootDir>/src/api$1",
    "^components(.*)$": "<rootDir>/src/components$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
  },
  transform: {
    '^.+\\.{ts|tsx}?$': ['ts-jest', { isolatedModules: true, }],
  },
});
