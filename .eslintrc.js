module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    es6: true,
  },
  extends: "airbnb-base",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: ["error", "double"],
  },
};
