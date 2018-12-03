module.exports = {
  "parserOptions": {
    "sourceType": "module"
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
  },
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "plugins": [
    "flowtype",
    "prettier", 
    "react",
    "react-native"
  ],
  "extends": "eslint:recommended",
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-unused-vars": 1
  }
};