# rn-mobx-starter-kit

使用 Expo 35，react-native，mobx 和 react-navigation 构建的跨平台简单 app。

[English](README.md) | 简体中文

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。有关如何在实时系统上部署项目，请参阅[部署](#部署)。

### 准备

- 推荐使用 nvm，长期支持版 lts node，长期支持版 npm 和 yarn。
  - 参照以下链接，首先安装 nvm
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 nvm 是**不**推荐的
  - 接着在终端/命令行安装长期支持版 node

    ```sh
    # for now, lts version is 10.16.3
    # last updated：2019.09.17
    nvm install 10.16.3
    ```

  - 全局升级 npm 到长期支持版，安装 yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - 如果你是国人，或许你应该设置镜像
- Git 也是需要的。
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 git 是推荐的
- react-native-cli 和 expo-cli 也是需要的。
  
  ```sh
  npm i -g react-native-cli expo-cli
  ```

### 安装

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

## 测试

目前没有测试。欢迎 PR。

## 部署

首先，打开 [request.js](./src/utils/request.js)，注释第 5 行，取消注释第 7 行。

然后，检查你的更新代码，确保他们没有问题。否则，你就需要重新打包上传了。

假定你没有自己的服务器：

- 运行 `yarn build:android`（构建 android 包）或 `yarn build:ios`（构建 ios 包）
- 下载 app 并上传到商店
- 使用 `yarn publish` 来更新你的 app

假定你有自己的服务器，而且要在上面托管你的 app：

- 跟随 [Hosting An App on Your Servers](https://docs.expo.io/versions/v35.0.0/distribution/hosting-your-app/) 的指引
- 简而言之
  - 导出资产文件，上传到服务器上
  - 构建 app，下载并上传到商店
  - 重复第一步来更新你的 app

## Built With

- [expo](https://expo.io/)：一组工具和服务，用于构建，部署和快速迭代来自相同代码库的原生 iOS，Android 和 Web 应用程序。 **你要非常非常仔细地阅读文档。**
- [react-native](https://reactnative.cn/)：使用 React 构建原生应用程序的框架
- [mobx](https://mobx.js.org/)：简单，可扩展的状态管理
- [react-navigation](https://reactnavigation.org/)：React Native 应用程序的路由和导航
- [axios](https://github.com/axios/axios)：基于Promise的HTTP客户端，用于浏览器和node.js
- [react-native-elements](https://react-native-training.github.io/react-native-elements/)：跨平台 React Native UI Toolkit
- [@ant-design/react-native](https://rn.mobile.ant.design/)：基于 React Native 的 UI 组件库
- [teaset](https://github.com/rilyu/teaset)：用于 react native 的 UI 库，提供 20 多个纯 JS（ES6）组件，专注于内容显示和动作控制
- [react-native-ui-xg](https://github.com/xgfe/react-native-ui-xg)：一套跨平台 React Native ui 套件
- [eslint](https://eslint.org)：一个为 JavaScript 提供了可插入的规范代码能力的开源项目，这个项目里使用了 [standard](https://standardjs.com/readme-zhcn.html)

## 特性

- 跨平台：android 和 ios
- 预设样式
- 布局例子
- 状态管理例子

TODO:

- 完整的文档，教导如何修改
- 添加 typescript 支持

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

## 版本命名

使用 [SemVer](http://semver.org/) 进行版本控制。有关可用版本，请参阅此仓库的 [releases](https://github.com/ModyQyW/vue-vuetify-admin/releases)。

## 作者

- **Rui Wu** - *最初工作* - [ModyQyW](https://github.com/ModyQyW)

另请参阅参与此项目的 [contributors](https://github.com/ModyQyW/vue-vuetify-admin/contributors) 列表。

## 协议

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## 致谢

- [react-native-boilerplate-mobx-flow](https://github.com/GeekyAnts/react-native-boilerplate-mobx-flow)
