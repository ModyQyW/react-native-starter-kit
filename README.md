# React Native Starter Kit | React Native脚手架

*By ModyQyW*

---

## Introduction | 介绍

This is A [React Native](https://facebook.github.io/react-native/) Starter Kit with [Ant Design Mobile](https://mobile.ant.design/docs/react/introduce), [React Navigation](https://reactnavigation.org/) and [MobX](https://github.com/mobxjs/mobx) Apps ( iOS & Android ) inited by [Expo](https://docs.expo.io/). The target sdk version is 24.0.0 in order to use Expo offline support. Hope this helpful.

这是一个使用[Expo](https://docs.expo.io/)初始化的，带有[Ant Design Mobile](https://mobile.ant.design/docs/react/introduce-cn)，[React Navigation](https://reactnavigation.org/)和[MobX](https://github.com/mobxjs/mobx)的[React Native](https://reactnative.cn/)脚手架。目标SDK版本设为24.0.0以使用Expo的离线支持。希望这个脚手架对你有帮助。

## Get Started | 起步

### 1. System Requirements | 系统要求

- Globally installed [Node](https://nodejs.org/en/) | 全局安装[Node](http://nodejs.cn/)
- Globally installed react-native-cli | 全局安装react-native-cli
- Globally installed exp | 全局安装exp
- Globally installed yarn for Chinese users | 中国用户建议全局安装yarn

```sh
npm install -g react-native-cli
npm install -g yarn
npm install -g exp
```

### 2. Installation | 安装

On the command prompt run the following commands | 在终端运行如下命令

```sh
$ git clone https://github.com/ModyQyW/react-native-starter-kit.git

$ cd react-native-starter-kit

$ npm install
  or
$ yarn
```

## Command | 命令

### Start | 启动

```sh
expo start
```

### Eject | 弹出

```sh
expo eject
```

### Run on Android | Android上运行

```sh
$ expo start --android
  or
$ npm run android
```

### Run on iOS | IOS上运行

```sh
$ expo start --ios
  or
$ npm run ios
```

### 3. Code Organization | 代码结构

```sh
|-  src
    |-  assets
        |-  fonts
        |-  images
        |-  ...
    |-  boot
        |-  configureStore.js
        |-  index.js
        |-  setup.js
    |-  container
        |-  xxxContainer
    |-  screens
        |-  xxx
            |-  related js
            |-  styles.js
    |-  store
        |-  related store
    |-  util
    |-  App.js
|-  App.js
|-  app.json
|-  package.json
|-  README.md
```

### 4. Coding Specification | 编码规范

I appreciate this: *Always follow the same set of coding specification - no matter how many people are involved in the same project, make sure that each line of code appears to be written by the same person.* I hope you can follow the coding specfication showed below, or follow your own coding specfication.

我推崇这么一条法则：“永远遵循同一套编码规范——不管有多少人共同参与同一项目，一定要确保每一行代码都像是同一个人编写的。”我希望你能遵循以下的编码规范，又或者遵循你自己的编码规范。

```md
// to do: put my coding specification
// to do: 填写编码规范
```

## Advice | 建议

Welcome to give me some advice whatever you want to say. I am a Chinese and my English is poor. Forgive me. :D

欢迎给我有关任何方面的建议。我是中国人，英语比较差，请见谅。:D