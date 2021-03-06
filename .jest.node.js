module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'md',
  ],
  transform: {
    '\\.tsx?$': './tests/jest/codePreprocessor',
    '\\.jsx?$': './tests/jest/codePreprocessor',
    '\\.md$': './tests/jest/demoPreprocessor',
  },
  testRegex: 'demo\\.test\\.js$',
  testEnvironment: 'node',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    }
  },
};
