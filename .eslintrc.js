module.exports = {
  env: {
    "browser": true,
    "node": true,
    "es2020": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: "jsx",
    project: "./tsconfig.json"
  },
  extends: [
    "standard-with-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier"
  ],
  plugins: [
    "standard",
    "import",
    "node",
    "promise",
    "react",
    "react-hooks",
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "import/extensions": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-props-no-spreading": ["error", { "custom": "ignore" }],
    "react/no-unescaped-entities": "off",
    "import/no-cycle": [0, { "ignoreExternal": true }],
    "prefer-const": "off",
    "no-use-before-define": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "no-triple-slash-reference": "off"
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        root: [
          "./src",
        ]
      }
    },
    react: {
      version: "detect"
    }
  }
}
