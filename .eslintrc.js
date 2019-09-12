module.exports = {
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
  },
  "parser": "babel-eslint",
  "env": {
    "es6": true,
    "react-native/react-native": true
  },
  "plugins": [
    "react",
    "react-native-a11y",
    "react-native"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native-a11y/recommended",
    "plugin:react-native/all",
    "standard",
    "standard-react"
  ],
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react-native/sort-styles": 0
  }
};