module.exports = {
  env: {
    node: true,
    commonjs: true,
    es6: true,
    'jest/globals': true,
    browser: true,
  },
  globals: {},
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['jest', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'error',
    'prettier/prettier': 'error',
    'require-yield': 0,
    'no-console': 'error',
    'no-case-declarations': 0,
  },
};
