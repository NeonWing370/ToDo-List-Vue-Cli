module.exports = {
  root: true,

  parser: "vue-eslint-parser",

  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false, 
    ecmaVersion: 2020,
    sourceType: "module"
  },

  env: {
    node: true,
    browser: true
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended"
  ],

  rules: {
    "no-undef": "off"
  }
};
