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

```md
|-  src                         code and asset directory | 代码及资源目录
    |-  assets                  asset directory | 资源目录
        |-  fonts               font assets directory | 字体资源目录
        |-  images              image assets directory | 图片资源目录
        |-  ...                 other assets directory | 其他资源目录
    |-  boot                    boot directory | 引导目录
        |-  ConfigureStore.js   configure all stores | 配置所有store
        |-  Index.js            call store configuration and fonts loading | 调用store配置和字体加载
        |-  Setup.js            load fonts needed | 加载需要的字体
    |-  container               screen containers directory | container目录
        |-  xxxContainer
    |-  screens                 screens directory | screen目录
        |-  xxx                 specific screens directory | 特定页面目录
            |-  related js      related js files | 相关js文件
            |-  styles.js       used style file | 使用到的样式文件
    |-  store                   stores directory | store目录
        |-  related store       related store files | 相关store文件
    |-  util                    tool directory | 工具目录
    |-  App.js                  navigation configuration file | 导航配置文件
|-  App.js                      app entry | 应用入口
|-  app.json                    expo app configuration file | expo应用配置文件
|-  package.json                app package file | 应用包文件
|-  README.md                   you know what it is | 你懂的
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