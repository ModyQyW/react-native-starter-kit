# React Native MobX Starter Kit

*By ModyQyW*

---

## Introduction

This is A [React Native](https://facebook.github.io/react-native/) Starter Kit with [React Navigation](https://reactnavigation.org/) and [MobX](https://github.com/mobxjs/mobx) inited by [Expo](https://docs.expo.io/). Hope this helpful.

To use offline support, make sure Expo version is higher than 23. Here I use Expo 33.

You **must** check [Expo Document](https://docs.expo.io/versions/latest/) for overall information.

If you want to change Expo SDK, please check [here](https://docs.expo.io/versions/v33.0.0/workflow/upgrading-expo-sdk-walkthrough/) and [here](https://blog.expo.io/expo-sdk-v33-0-0-is-now-available-52d1c99dfe4c).

Before building standalone apps, please check [here](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/).

I import several UI toolkit listed below.

- [Ant Design Mobile RN](https://rn.mobile.ant.design/docs/react/introduce)
- [React Native Elements](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)
- [teaset](https://github.com/rilyu/teaset/blob/master/README.md)
- [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg)

They are similar in style and complementary in function, allowing to use different components as needed. My personal suggestion is to use Ant Design Mobile RN or React Native Elements as the main UI. When there are component requirements that can't be met, use another library to get a solution. In this project, I used Ant Design Mobile RN as the main UI. Please adjust according to your needs.

Besides, I add some Utilities I think helpful.

- [moment](http://momentjs.com/)
- [validator](https://github.com/chriso/validator.js)

About flexbox, check here:

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Get Started

### System Environment Requirements

- Globally installed [Node](https://nodejs.org/en/) **first**
- Globally installed react-native-cli
- Globally installed expo-cli
- Globally installed yarn for Chinese users

```sh
npm i -g react-native-cli
npm i -g expo-cli
# optional
npm i -g yarn
```

- Chinese users are recommended to set repository to mirrors

```sh
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

### Installation

On the command prompt run the following commands

```sh
$ git clone git@github.com:ModyQyW/rn-mobx-starter-kit.git

$ cd rn-mobx-starter-kit

$ yarn
  or
$ npm i
```

## Commands

```sh
# use -h for more information

# start
# expo start
yarn start

# run on android
# expo start --android
yarn android

# run on ios
# expo start --ios
yarn ios

# run on web (beta)
# expo start --web
yarn web

# build android app in test channel
# expo build:android --release-channel test
yarn prebuild:android

# build ios ipa in test channel
# expo build:ios --release-channel test
yarn prebuild:ios

# build web using webpack development mode (beta)
# expo build:web -d
yarn prebuild:web

# build android app
# expo build:android
yarn build:android

# build ios ipa
# yarn build:ios
expo build:ios

# build web (beta)
# expo build:web
expo build:web

# eject
# make sure you know what you are doing when exec this
# check https://docs.expo.io/versions/v33.0.0/expokit/eject/
# expo eject
yarn eject

# test using jest
yarn test
```

For more commands and usage, check documents or use `expo -h`.

## Code Organization

```md
|-- src                       code and asset directory
  |-- assets                  asset directory
    |-- fonts                 font assets directory
    |-- images                image assets directory
    |-- icon.png              app icon
    |-- splash.png            image for loading and splash screen for standalone apps
    |-- ...                   other assets directory
  |-- boot                    boot directory
    |-- ConfigureStore.js     configure all stores
    |-- Index.js              call store configuration and fonts loading
    |-- Setup.js              load fonts needed
  |-- components              global components
  |-- mixins                  global styles and colors
    |-- colors.js
    |-- styles.js
  |-- stores                  stores directory
    |-- related store         related store files
  |-- utils                   tool directory
    |-- request.js            axios encapsulation
  |-- views                   view directory
    |-- xxx                   view module directory
      |-- related js          module js files
      |-- styles.js           module style file
  |-- App.js                  navigation configuration file
|-- .eslintrc.js              eslint configuration file
|-- App.js                    app entry
|-- app.json                  expo app configuration file
|-- package.json              app package file
|-- README.md                 you know what it is
|-- yarn.lock                 package version file
|-- ...
```

I almost finish all my job in stores and views, sometimes also in components. This pattern is suitable for small projects.

If your project is big enough, I advise to use this pattern:

- get all data and write all functions you needed in containers
- pass functions and data to corresponding views
- deal with layout and logic in corresponding views

If there are more than one role, I advise to create new corresponding role folders in views (containers and views for big project) and put corresponding files.

Or just change as you like. :D

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

P.S. Default using MobX strict mode. Check [App.js](./src/App.js).

## Follow-up Plan

In the next few months I will use my free time to continue to update this starter, including adding interfaces and some layout examples.

## Advice

Welcome to give me some advice whatever you want to say. I am a Chinese and my English is poor. Forgive me.

Help me improve it if it's not perfect.

You can also help me improve my English :D

## Related Links

- [Configuring ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)

## Donate

I am still working on it to imporve - not only add new function but also complete codes and documents.

If you think this is helpful, you can buy me a coffee :D

|WeChat|Alipay|
|:-:|:-:|
|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/wechat.png" style="width: 200px;"/>|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/alipay.jpg" style="width: 200px;" />|