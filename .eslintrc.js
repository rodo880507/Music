module.exports = {
  root: true,

  env: {
    node: true,
    jest: true,
  },

  extends: ['plugin:vue/vue3-essential', '@vue/airbnb'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-multiple-template-root': 0,
    'linebreak-style': 'off',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],

  extends: ['plugin:vue/essential', '@vue/airbnb'],
};
