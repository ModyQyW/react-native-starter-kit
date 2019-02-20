# React Native MobX Starter Kit

*By ModyQyW*

---

## Introduction

This is A [React Native](https://facebook.github.io/react-native/) Starter Kit with [Ant Design Mobile RN](https://rn.mobile.ant.design/docs/react/introduce), [React Navigation](https://reactnavigation.org/) and [MobX](https://github.com/mobxjs/mobx) Apps ( iOS & Android ) inited by [Expo](https://docs.expo.io/). Hope this helpful.

By the way, to use offline support, make sure Expo version is higher than 23. Here I use Expo 32.

If you want to change Expo SDK, please check [here](https://docs.expo.io/versions/v32.0.0/workflow/upgrading-expo-sdk-walkthrough) and [here](https://docs.expo.io/versions/v32.0.0/workflow/upgrading-expo).

I import [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg) in order to use different components as required.

Besides, I add some Utilities, including [js-base64](https://github.com/dankogai/js-base64), [js-xss](https://github.com/leizongmin/js-xss), [validator](https://github.com/chriso/validator.js). I believe react-native-ui-xg has help import [moment](https://github.com/moment/moment) if you need.

## Get Started

### 1. System Environment Requirements

- Globally installed [Node](https://nodejs.org/en/) **first**
- Globally installed react-native-cli
- Globally installed expo-cli
- Globally installed yarn for Chinese users

```sh
npm i -g react-native-cli
npm i -g expo-cli
npm i -g yarn
```

### 2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/ModyQyW/rn-starter-kit-with-antd.git

$ cd rn-starter-kit-with-antd

$ yarn
  or
$ npm i
```

## Command

### Start

```sh
expo start
```

### Eject

```sh
expo eject
```

### Run on Android

```sh
expo start --android
```

### Run on iOS

```sh
expo start --ios
```

## Code Organization

```md
|-- src                       code and asset directory
  |-- assets                  asset directory
    |-- fonts                 font assets directory
    |-- images                image assets directory
    |-- ...                   other assets directory
  |-- boot                    boot directory
    |-- ConfigureStore.js     configure all stores
    |-- Index.js              call store configuration and fonts loading
    |-- Setup.js              load fonts needed
  |-- container               screen containers directory
    |-- xxxContainer
  |-- screen                  screen directory
    |-- xxx                   specific screen directory
      |-- related js          related js files
      |-- styles.js           used style file
  |-- store                   stores directory
    |-- related store         related store files
  |-- util                    tool directory
  |-- App.js                  navigation configuration file
|-- App.js                    app entry
|-- app.json                  expo app configuration file
|-- package.json              app package file
|-- README.md                 you know what it is
```

I get all data and write every function I needed in containers, pass the function and data to screen, and do layout jobs and deal with logic in screen. This scheme is expected to apply to scenes with more than ten pages and one user role. If pages number is fewer than ten, please merge the container and screen as needed. If there are more than one role, it is recommended to create new corresponding folders in the container and screen folder and put corresponding files.

Just change this scheme as you like. :D

## Coding Specification

I appreciate this words: *Always follow the same set of coding specification - no matter how many people are involved in the same project, make sure that each line of code appears to be written by the same person.* I hope you can follow one coding specfication to keep your codes neat. I have given some coding specifications below for reference.

- [Coding Specification by @mdo](http://codeguide.co/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

Besides, I have given a referenced react native import order.

```md
react
react-native

redux or mobx
reactredux or mobx-react

third-party lib
custom components
images
public style
business components & their styles
actions
```

And a referenced react native method order.

```md
getDefaultProps
getInitialState
componentWillMount
componentDidMount
componentWillReceiveProps
shouldComponentUpdate
componentWillUpdate
componentDidUpdate
componentWillUnmount

other methods

render
```

P.S. make sure using strict mode to reduce mistakes. But I know little using it, help me please! T_T

```js
import { configure } from "mobx"

configure({ enforceActions: "always" });
```

## Follow-up Plan

In the next few months I will use my free time to continue to update this scaffold, including adding interfaces and some layout examples.

## Advice

Welcome to give me some advice whatever you want to say. I am a Chinese and my English is poor. Forgive me. :D

Help me improve it if it's not perfect for you :D

## Links

- [Configuring ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)