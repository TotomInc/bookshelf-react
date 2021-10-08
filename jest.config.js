module.exports = {
  // https://github.com/jefflau/jest-fetch-mock#to-setup-for-all-tests
  automock: false,

  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['<rootDir>/src/lib/setup-tests.ts'],

  // https://testing-library.com/docs/react-testing-library/setup/#jest-27
  testEnvironment: 'jest-environment-jsdom',

  // https://jestjs.io/docs/webpack#mocking-css-modules
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
};
