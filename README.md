# React Native Starter Kit | React Native脚手架

*By ModyQyW*

---

## Introduction | 介绍

This is A [React Native](https://facebook.github.io/react-native/) Starter Kit with [Ant Design Mobile](https://mobile.ant.design/docs/react/introduce), [React Navigation](https://reactnavigation.org/) and [MobX](https://github.com/mobxjs/mobx) Apps ( iOS & Android ) inited by [Expo](https://docs.expo.io/). Hope this helpful.

By the way, to use offline support, make sure Expo version is higher than 23. Here I use Expo 30.0.0.

这是一个使用 [Expo](https://docs.expo.io/) 初始化的, 带有 [Ant Design Mobile](https://mobile.ant.design/docs/react/introduce-cn), [React Navigation](https://reactnavigation.org/) 和 [MobX](https://github.com/mobxjs/mobx) 的 [React Native](https://reactnative.cn/) 脚手架。希望这个脚手架对你有帮助。

另外, 如果想使用离线支持, 保证 Expo 的版本在 23 以上. 这个项目里我使用了 Expo 30.0.0.

## Get Started | 起步

### 1. System Environment Requirements | 系统环境要求

- Globally installed [Node](https://nodejs.org/en/) | 全局安装 [Node](http://nodejs.cn/)
- Globally installed react-native-cli | 全局安装 react-native-cli
- Globally installed expo-cli | 全局安装 expo-cli
- Globally installed yarn for Chinese users | 中国用户建议全局安装 yarn

```sh
npm install -g react-native-cli
npm install -g expo-cli
npm install -g yarn
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
  or
$ yarn run android
```

### Run on iOS | IOS上运行

```sh
$ expo start --ios
  or
$ npm run ios
  or
$ yarn run android
```

## Code Organization | 代码结构

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

I get all data and write every function I needed in containers, pass the function and data to screens, and do layout jobs and deal with logic in screens. Just change this scheme as you like. :D

我在 container 里获取到所有我需要的数据、写好了所有我需要的函数, 把数据和函数传给 screen, 在 screen 里进行布局并处理页面逻辑。请随意调整这种方案。:D

## Coding Specification | 编码规范

I appreciate this words: *Always follow the same set of coding specification - no matter how many people are involved in the same project, make sure that each line of code appears to be written by the same person.* I hope you can follow one coding specfication to keep your codes neat. I have given some coding specifications below for reference.

我推崇这么一条法则：“永远遵循同一套编码规范——不管有多少人共同参与同一项目, 一定要确保每一行代码都像是同一个人编写的。”我希望你能遵循一个编码规范以保证代码简洁优雅。我在下方给出了一些编码规范以供参考。

- [Coding Specification by @mdo](https://codeguide.bootcss.com/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

Besides, I have given a referenced react native import order.

另外, 我还给出了用于参考的 RN 引入顺序。

```md
react
react-native

redux or mobx
reactredux or mobx-react

third-party lib | 第三方库
custom components | 自定义组件
images | 图片
public style | 公共样式
business components & their styles | 业务组件及其样式
actions
```

And a referenced react native method order.

以及用于参考的 RN 方法顺序。

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

另：确认自己在使用严格模式, 减少错误. 但我自己不太会用, 帮帮我! QAQ

```js
import { configure } from "mobx"

configure({ enforceActions: "always" });
```

## Follow-up Plan | 后续计划

In the next few months I will use my free time to continue to update this scaffold, including adding interfaces and some layout examples.

未来几个月内我会利用空闲时间继续更新这个脚手架, 包括增加界面与一些布局样例.

## Advice | 建议

Welcome to give me some advice whatever you want to say. I am a Chinese and my English is poor. Forgive me. :D

欢迎给我有关任何方面的建议。我是中国人, 英语比较差, 请见谅。:D