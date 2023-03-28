module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'plugin:vue/vue3-essential', 'standard-with-typescript', 'import'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
