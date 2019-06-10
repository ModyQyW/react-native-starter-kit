# React Native MobX 脚手架

*By ModyQyW*

---

## 介绍

这是一个使用 [Expo](https://docs.expo.io/) 初始化的, 带有 [React Navigation](https://reactnavigation.org/) 和 [MobX](https://github.com/mobxjs/mobx) 的 [React Native](https://reactnative.cn/) 脚手架。希望这个脚手架对你有帮助。

如果想使用离线支持，保证 Expo 的版本在 23 以上。这个项目里我使用了 Expo 33。

**务必**查看 [Expo 文档] 获取全面的信息。

如果你想修改 Expo SDK，请查看[这里](https://docs.expo.io/versions/v33.0.0/workflow/upgrading-expo-sdk-walkthrough/)和[这里](https://blog.expo.io/expo-sdk-v33-0-0-is-now-available-52d1c99dfe4c)。

在打包独立 APP 前，请查看 [这里](https://docs.expo.io/versions/latest/distribution/building-standalone-apps/)

我引入了数个 UI 库，列写如下：

- [React Native Elements](https://react-native-training.github.io/react-native-elements/docs/getting_started.html)
- [https://rn.mobile.ant.design/docs/react/introduce-cn](https://rn.mobile.ant.design/docs/react/introduce-cn)
- [teaset](https://github.com/rilyu/teaset/blob/master/docs/cn/README.md)
- [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg)

它们风格相近，功能互补，可以视需求使用不同的组件。我个人的建议和该项目的做法是，以 React Native Elements 为主要 UI 库，出现其不能满足的组件需求时再到别的库中寻求解决方法。请根据你的需要进行调整。

另外，我还加入一些我认为非常有用的库，包括：

- [moment](http://momentjs.com/)
- [validator](https://github.com/chriso/validator.js)

关于 flexbox，查看以下链接：

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox 布局详解](http://caibaojian.com/flexbox-guide.html)

## 起步

### 系统环境要求

- **首先**全局安装 [Node](http://nodejs.cn/)
- 全局安装 react-native-cli
- 全局安装 expo-cli
- 建议全局安装 yarn

```sh
npm i -g react-native-cli
npm i -g expo-cli
# 可选的
npm i -g yarn
```

- 中国用户建议设置仓库到国内镜像

```sh
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```

### 安装

在终端运行如下命令

```sh
$ git clone git@github.com:ModyQyW/rn-mobx-starter-kit.git

$ cd rn-mobx-starter-kit

$ yarn
  or
$ npm i
```

## 命令

```sh
# 使用 -h 获取更多信息

# start
# expo start
yarn start

# android 运行
# expo start --android
yarn android

# ios 运行
# expo start --ios
yarn ios

# web 运行 (beta)
# expo start --web
yarn web

# 在 test channel 上构建 android app
# expo build:android --release-channel test
yarn prebuild:android

# 在 test channel 上构建 ios ipa
# expo build:ios --release-channel test
yarn prebuild:ios

# 使用 webpack development 模式构建 web (beta)
# expo build:web -d
yarn prebuild:web

# 构建 android app
# expo build:android
yarn build:android

# 构建 ios app
# expo build:ios
yarn build:ios

# build web (beta)
# expo build:web
yarn build:web

# eject
# 请确认你知道执行这条命令意味着什么
# 查阅 https://docs.expo.io/versions/v33.0.0/expokit/eject/
# expo eject
yarn eject

# jest 测试
yarn test
```

更多的命令与使用，查看文档或使用`expo -h`。

## 代码结构

```md
|-- src                       代码及资源目录
  |-- assets                  资源目录
    |-- fonts                 字体资源目录
    |-- images                图片资源目录
    |-- icon.png              app 图标
    |-- splash.png            独立 APP 载入屏图片
    |-- ...                   其他资源目录
  |-- boot                    引导目录
    |-- ConfigureStore.js     配置所有 store
    |-- Index.js              调用 store 配置和字体加载
    |-- Setup.js              加载需要的字体
  |-- components              全局组件
  |-- general                  全局样式与颜色
    |-- colors.js
    |-- styles.js
  |-- stores                  store 目录
    |-- related store         相关 store 文件
  |-- utils                   工具目录
    |-- request.js            axios 封装
  |-- screens                   view 目录
    |-- xxx                   view 模块目录
      |-- related js          模块 js 文件
      |-- styles.js           模块样式文件
    |-- styles.js             全局样式
  |-- App.js                  导航配置文件
|-- .eslintrc.js              eslint 配置文件
|-- App.js                    应用入口
|-- app.json                  expo 应用配置文件
|-- package.json              应用包文件
|-- README_CN.md              你懂的
|-- yarn.lock                 包版本文件
|-- ...
```

我几乎在 stores 和 view 中完成了所有工作，有时候还需要在 components 做一些工作。

如果你的项目足够大，我建议你使用以下模式：

- 在 containers 中获取你需要的所有数据，声明你需要的所有方法
- 传递所有方法和数据到对应的 screens 中
- 在对应的 screens 中处理布局和逻辑

如果存在超过一个角色，我建议在 screens（大项目在 containers 和 screens）中新建对应的角色文件夹并放入对应的文件。

请随意调整这种方案。_(:з」∠)_

## 编码规范

我推崇这么一条法则：“永远遵循同一套编码规范——不管有多少人共同参与同一项目, 一定要确保每一行代码都像是同一个人编写的。”我希望你能遵循一个编码规范以保证代码简洁优雅。我在下方给出了一些编码规范以供参考。

- [Coding Specification by @mdo](https://codeguide.bootcss.com/)
- [Airbnb JavaScript Style Guide](https://github.com/lin-123/javascript)
- [Airbnb React/JSX Style Guide](https://github.com/JasonBoy/javascript/tree/master/react)

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

另：默认开启了 MobX 的严格模式。请查看 [App.js](./src/App.js)。

## 后续计划

未来几个月内我会利用空闲时间继续更新这个脚手架，包括增加界面与一些布局样例。

## 建议

欢迎给我有关任何方面的建议。我是中国人，英语比较差，请见谅。

如果你认为这还有所欠缺，请帮助我完善这个脚手架。

你也可以帮我提高一下我的英语_(:з」∠)_

## 相关链接

- [Configuring ESLint](https://eslint.org/)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-react-native](https://www.npmjs.com/package/eslint-plugin-react-native)

## 捐赠

我仍在努力使这个项目变得更好，不仅仅是丰富功能，还有完善代码与文档。

如果你觉得这个项目对你有用，你可以给我买杯咖啡_(:з」∠)_

|WeChat|Alipay|
|:-:|:-:|
|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/wechat.png" />|<img src="https://raw.githubusercontent.com/ModyQyW/Pictures/master/alipay.jpg" />|