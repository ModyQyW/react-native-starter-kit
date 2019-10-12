# rn-mobx-starter-kit

A simple cross-platform app built with Expo 35, react-native, mobx and react-navigation.

English | [简体中文](README.CN.md)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#Deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- Using nvm, node lts, npm lts and yarn is recommended
  - Follow the links below and install nvm first
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - Using [Homebrew](https://brew.sh/) to install nvm on Mac is **NOT** recommended
  - Then install node lts in terminal / command line

    ```sh
    # for now, lts version is 10.16.3
    # last updated: 2019.09.17
    nvm install 10.16.3
    ```

  - Globally update npm to lts and install yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - If you are Chinese, maybe you should set mirrors
- Git is also required
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - Using [Homebrew](https://brew.sh/) to install git on Mac is recommended
- react-native-cli and expo-cli is also required
  
  ```sh
  npm i -g react-native-cli expo-cli
  ```

### Installing

```sh
# terminal / command line 1
# clone the project
git clone git@github.com:ModyQyW/rn-mobx-starter-kit.git

# enter the project directory
cd rn-mobx-starter-kit

# install dependency
yarn

# start developing android
yarn android

# start developing ios
yarn ios

# use test channel to build android and test
yarn prebuild:android

# use test channel to build ios and test
yarn prebuild:ios

# test channel publish
yarn prepublish

# use default channel to build android and deploy
yarn build:android

# use default channel to build ios and deploy
yarn build:ios

# default channel publish
yarn publish

# eject
# you had better know what it means
yarn eject

# terminal / command line 2
# clone corresponding backend server for developing
git clone git@github.com:ModyQyW/backend-server.git

# enter the server directory
cd backend-server

# install dependency
yarn

# start server
yarn start
```

## Running the tests

No tests now. Pull requests are welcome.

## Deployment

First, open [request.js](./src/utils/request.js), comment L5 and uncomment L7.

Second, Check your update code and make sure they are fine. Or, you need to build a new app and upload.

Assuming you do not have your own server:

- Run `yarn build:android`(for android) or `yarn build:ios`(for ios)
- Download the app and upload to store
- Use `yarn publish` to update your app

Assuming you have your own server and you are going to host the app on it:

- Follow [Hosting An App on Your Servers](https://docs.expo.io/versions/v35.0.0/distribution/hosting-your-app/)
- For short
  - Export the asset files and upload to your server
  - Build the app, download and upload to store
  - Repeat the first step to update your app

## Built With

- [expo](https://expo.io/) - A set of tools and services for building, deploying, and quickly iterating on native iOS, Android, and web apps from the same codebase. **You should read the documents very, very carefully.**
- [react-native](https://facebook.github.io/react-native/) - A framework for building native apps using React
- [mobx](https://mobx.js.org/) - Simple, scalable state management
- [react-navigation](https://reactnavigation.org/) - Routing and navigation for your React Native apps
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [react-native-elements](https://react-native-training.github.io/react-native-elements/) - Cross Platform React Native UI Toolkit
- [@ant-design/react-native](https://rn.mobile.ant.design/) - A UI component library based on React Native
- [teaset](https://github.com/rilyu/teaset) - A UI library for react native, provides 20+ pure JS(ES6) components, focusing on content display and action control
- [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg) - A suit of cross platform React Native ui kit
- [eslint](https://eslint.org) - An open source project provided a pluggable linting utility for JavaScript, using [standard](https://standardjs.com/) in the project

## Features

- Cross platform: android and ios
- Preset styles
- Layout examples
- Store examples

TODO:

- Full documents about how to modify
- Add typescript support

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Versioning

Use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/ModyQyW/rn-mobx-starter-kit/releases).

## Authors

- **Rui Wu** - *Initial work* - [ModyQyW](https://github.com/ModyQyW)

See also the list of [contributors](https://github.com/ModyQyW/rn-mobx-starter-kit/contributors) who participated in this project.

## License

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## Acknowledgments

- [react-native-boilerplate-mobx-flow](https://github.com/GeekyAnts/react-native-boilerplate-mobx-flow)
