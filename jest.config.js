module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  };
  