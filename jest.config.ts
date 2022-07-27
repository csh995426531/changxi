/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: ['src/utils/**', 'src/components/**'],

  // The directory where Jest should output its coverage files
  coverageDirectory: '.coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // An object that configures minimum threshold enforcement for coverage results
  // TODO 逐步提高覆盖率
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './src/utils/': {
      branches: 60,
      functions: 20,
      lines: 25,
      statements: 25,
    },
    './src/components/': {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
}
