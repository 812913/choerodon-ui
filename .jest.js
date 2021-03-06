const libDir = process.env.LIB_DIR;

const transformIgnorePatterns = [
  '/dist/',
  'node_modules\/[^/]+?\/(?!(es|node_modules)\/)', // Ignore modules without es dir
];

module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'md',
  ],
  modulePathIgnorePatterns: [
    '/_site/',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    'dekko',
    'node',
  ],
  transform: {
    '\\.tsx?$': './tests/jest/codePreprocessor',
    '\\.jsx?$': './tests/jest/codePreprocessor',
    '\\.md$': './tests/jest/demoPreprocessor',
  },
  testRegex: libDir === 'dist' ? 'demo\\.test\\.js$' : '.*\\.test\\.js$',
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    '!components/*/style/index.tsx',
    '!components/style/index.tsx',
    '!components/*/locale/index.tsx',
    '!components/*/__tests__/**/type.tsx',
    '!components/**/*/interface.{ts,tsx}',
  ],
  transformIgnorePatterns,
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json',
    }
  },
};
