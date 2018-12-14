import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { observable, action, configure } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import styles from './styles';

export interface Props {
  navigation: any,
  signStore: any
}
export interface State {}

// handle your auto sign in logic here
// 在这里处理你的自动登录逻辑
@inject('signStore')
@observer
class AutoSignIn extends React.Component<Props, State> {
  @observable isAutoSignIn = null;

  @observable signStore = this.props.signStore;

  // if auto sign in failed, navigate to SignIn screen
  // else navigate to Home screen
  // 如果自动登录失败, 导航到 SignIn 页
  // 否则导航到 Home 页
  async componentDidMount() {
    const { toHome, toSignIn } = this.props;
    this.isAutoSignIn = await this.signStore.autoSignIn();
    if (this.isAutoSignIn === true) {
      toHome();
    } else {
      toSignIn();
    }
  }

  render() {
    return (
      <View style={styles.container_AutoSignIn}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AutoSignIn;
