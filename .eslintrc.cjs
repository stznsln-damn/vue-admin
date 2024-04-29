module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "no-undef": "off", // 使用ts检测
    "no-unused-vars": "off",
    "no-await-in-loop": "error",
    "no-constructor-return": "error",
    "no-debugger": "warn",
    "no-plus-plus": "off",
    "no-console": "warn",
    eqeqeq: "off",
  },
};
