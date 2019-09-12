# React Native MobX Starter Kit

*By ModyQyW*

---

## Introduction

This is A [React Native](https://facebook.github.io/react-native/) Starter Kit with [React Navigation](https://reactnavigation.org/) and [MobX](https://github.com/mobxjs/mobx) inited by [Expo](https://docs.expo.io/). Hope this helpful.

To use offline support, make sure Expo version is higher than 23. Here I use Expo 34.

You **must** check [Expo Document](https://docs.expo.io/versions/latest/) for overall information.

If you want to change Expo SDK, please check [here](https://docs.expo.io/versions/v34.0.0/workflow/upgrading-expo-sdk-walkthrough/) and [here](https://blog.expo.io/expo-sdk-34-is-now-available-4f7825239319).

Before building standalone apps, please check [here](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/).

I import several UI toolkit listed below.

- [React Native Elements](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)
- [Ant Design Mobile RN of React](https://rn.mobile.ant.design/docs/react/introduce)
- [teaset](https://github.com/rilyu/teaset/blob/master/README.md)
- [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg)

They are similar in style and complementary in function, allowing to use different components as needed. My personal suggestion and what this project did is to use React Native Elements as the main UI. When there are component requirements that can't be met, use another library to get a solution. Please adjust according to your needs.

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

Run the following commands in terminal

```sh
$ git clone git@github.com:ModyQyW/rn-mobx-starter-kit.git

$ cd rn-mobx-starter-kit

$ yarn
# or
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
# check https://docs.expo.io/versions/v34.0.0/expokit/eject/
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
    |-- sounds                sound assets directory
    |-- icon.png              app icon
    |-- splash.png            image for loading and splash screen for standalone apps
    |-- ...                   other assets directory
  |-- boot                    boot directory
    |-- Configure.js          stores configuration
    |-- Index.js              configure stores and load assets
    |-- Setup.js              assets load
  |-- components              global components
  |-- stores                  mobx store directory
    |-- xxx.js
  |-- utils                   tool directory
    |-- request.js            axios encapsulation
  |-- screens                 screen directory
    |-- xxx                   screen module directory
      |-- related js          module js files
      |-- styles.js           module style file
    |-- globalStyles.js       global styles
  |-- App.js                  navigation configuration file
|-- .eslintrc.js              eslint configuration file
|-- App.js                    app entry
|-- app.json                  expo app configuration file
|-- package.json              app package file
|-- README.md
|-- yarn.lock                 package version file
|-- ...
```

I almost finish all my work in stores and screens, sometimes also in components. This pattern is suitable for small projects.

If your project is big enough, I advise to use this pattern:

- get all data and write all functions you needed in containers
- pass functions and data to corresponding screens
- deal with layout and logic in corresponding screens

If there are more than one role, I advise to create new corresponding role folders in screens (containers and screens for big project) and put corresponding files.

Or just change as you like. :D

## Coding Specification

I appreciate this words: *Always follow the same set of coding specification - no matter how many people are involved in the same project, make sure that each line of code appears to be written by the same person.* I hope you can follow one coding specfication to keep your codes neat. I have given some coding specifications below for reference. Standard style is used in this project.

- [Coding Specification by @mdo](http://codeguide.co/)
- [JavaScript Standard Style](https://standardjs.com/rules-en.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

Besides, I have given a referenced react native import order.

```md
react
react-native

redux or mobx
react-redux or mobx-react

prop-types

third-party lib
custom components
images
global style
business components & their styles
actions
```

And a referenced react native method order.

```md
getDefaultProps
getInitialState
componentDidMount
shouldComponentUpdate
componentDidUpdate
componentWillUnmount

other methods

render
```

You can see my code for more details.

P.S. Default using MobX strict mode. Check [App.js](./src/App.js).

## Advice

Welcome to give me some advice whatever you want to say. I am a Chinese and my English is poor. Forgive me.

Help me improve it if it's not perfect.

You can also help me improve my English :D

## Donate

I am still working on it to imporve - not only add new function but also complete codes and documents.

If you think this is helpful, you can buy me a coffee :D

|WeChat|Alipay|
|:-:|:-:|
|<img src="./wechat.png" style="width: 200px;"/>|<img src="./alipay.jpeg" style="width: 200px;" />|
