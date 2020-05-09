module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/essential",
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "@nuxtjs/eslint-config-typescript"
  ],
  // required to lint *.vue files
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    semi: ["error", "always"],
    quotes: ["warn", "double"],
    "space-before-function-paren": ["error", "never"],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always"
        }
      }
    ],
    "vue/singleline-html-element-content-newline": "off",
    "no-console": "off",
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always"
      }
    ],
    "vue/max-attributes-per-line": "off",
    "vue/require-prop-types": "off",
    "arrow-parens": ["error", "as-needed"],
    "prettier/prettier": ["error", { semi: true }],
    "object-shorthand": ["error", "always"]
  }
};
