# React Native 脚手架

*By ModyQyW*

---

## 介绍

这是一个使用 [Expo](https://docs.expo.io/) 初始化的, 带有 [Ant Design Mobile](https://mobile.ant.design/docs/react/introduce-cn), [React Navigation](https://reactnavigation.org/) 和 [MobX](https://github.com/mobxjs/mobx) 的 [React Native](https://reactnative.cn/) 脚手架。希望这个脚手架对你有帮助。

另外, 如果想使用离线支持，保证 Expo 的版本在 23 以上。这个项目里我使用了 Expo 31。

如果你想修改 Expo SDK，请查看[这里](https://docs.expo.io/versions/v31.0.0/workflow/upgrading-expo-sdk-walkthrough)和[这里](https://docs.expo.io/versions/v31.0.0/workflow/upgrading-expo)。

我引入了 [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg) ，这样能视需求使用不同的组件。

另外，我还加入一些工具，包括 [js-base64](https://github.com/dankogai/js-base64)，[js-xss](https://github.com/leizongmin/js-xss) 和 [validator](https://github.com/chriso/validator.js)。如果你需要 [moment](https://github.com/moment/moment)，我相信 react-native-ui-xg 已经替你引入了。

## 起步

### 系统环境要求

- **首先**全局安装 [Node](http://nodejs.cn/)
- 全局安装 react-native-cli
- 全局安装 expo-cli
- 建议全局安装 yarn

```sh
npm i -g react-native-cli
npm i -g expo-cli
npm i -g yarn
```

- 中国用户建议设置 npm 和 yarn 的仓库到国内镜像

```sh
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

### 安装

在终端运行如下命令

```sh
$ git clone https://github.com/ModyQyW/rn-starter-kit-with-antd.git

$ cd rn-starter-kit-with-antd

$ yarn
  or
$ npm i
```

## 命令

### 启动

```sh
expo start
```

### 弹出

```sh
expo eject
```

### Android上运行

```sh
expo start --android
```

### IOS上运行

```sh
expo start --ios
```

## 代码结构

```md
|-- src                       代码及资源目录
  |-- assets                  资源目录
    |-- fonts                 字体资源目录
    |-- images                图片资源目录
    |-- ...                   其他资源目录
  |-- boot                    引导目录
    |-- ConfigureStore.js     配置所有store
    |-- Index.js              调用store配置和字体加载
    |-- Setup.js              加载需要的字体
  |-- container               container目录
    |-- xxxContainer
  |-- screens                 screen目录
    |-- xxx                   特定页面目录
      |-- related js          相关js文件
      |-- styles.js           使用到的样式文件
  |-- store                   store目录
    |-- related store         相关store文件
  |-- util                    工具目录
  |-- App.js                  导航配置文件
|-- App.js                    应用入口
|-- app.json                  expo应用配置文件
|-- package.json              应用包文件
|-- README.md                 你懂的
```

我在 container 里获取到所有我需要的数据、写好了所有我需要的函数, 把数据和函数传给 screen, 在 screen 里进行布局并处理页面逻辑。请随意调整这种方案。:D

## 编码规范

我推崇这么一条法则：“永远遵循同一套编码规范——不管有多少人共同参与同一项目, 一定要确保每一行代码都像是同一个人编写的。”我希望你能遵循一个编码规范以保证代码简洁优雅。我在下方给出了一些编码规范以供参考。

- [Coding Specification by @mdo](https://codeguide.bootcss.com/)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

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

另：确认自己在使用严格模式, 减少错误. 但我自己不太会用, 帮帮我! QAQ

```js
import { configure } from "mobx"

configure({ enforceActions: "always" });
```

## 后续计划

未来几个月内我会利用空闲时间继续更新这个脚手架，包括增加界面与一些布局样例。

## 建议

欢迎给我有关任何方面的建议。我是中国人，英语比较差，请见谅。_(:з」∠)_

如果你认为这还有所欠缺，请帮助我完善这个脚手架♪(^∇^*)

## Links | 相关链接

- [Configuring ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-flowtype](https://www.npmjs.com/package/eslint-plugin-flowtype)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)