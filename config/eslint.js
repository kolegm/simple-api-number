/**
 * @see [eslint](https://eslint.org)
 */

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true,
    jest: true
  },
  // https://github.com/prettier/eslint-config-prettier
  extends: [
    'plugin:you-dont-need-lodash-underscore/compatible',
    'standard',
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/standard'
  ],
  plugins: ['flowtype', 'prettier', 'standard'],
  parserOptions: {
    sourceType: 'module'
  },
  // https://eslint.org/docs/rules
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        code: 120,
        parser: 'flow',
        tabWidth: 2,
        useTabs: false,
        semi: true
      }
    ],
    'linebreak-style': ['error', 'unix'],
    'no-cond-assign': ['error', 'always'],
    'no-inline-comments': 'off',
    'no-console': 'off',
    'flowtype/no-types-missing-file-annotation': 0,
    'max-len': 0
  },
  settings: {
    flowtype: {
      // onlyFilesWithFlowAnnotation: true
    }
  }
};
