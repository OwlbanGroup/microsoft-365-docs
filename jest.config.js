module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/tests/**/*.(test|spec).(ts|tsx|js|jsx)'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@testing-library|@babel/runtime|some-esm-package)/)'
  ],
};
