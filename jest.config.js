/** @type {import('ts-jest').JestConfigWithTsJest} */
const configuration = {
    preset: 'ts-jest',
    collectCoverageFrom: ['src/**/*.ts'],
    moduleNameMapper: {
        '~/(.*)': '<rootDir>/src/$1',
    },
    testPathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/lib/',
    ],
};

module.exports = configuration;
