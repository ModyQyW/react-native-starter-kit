import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../styles';

const styles = StyleSheet.create({

});

// handle your auto sign in logic here
// 在这里处理你的自动登录逻辑
@inject('authStore')
@observer
class AutoSignIn extends React.Component {
  @observable authStore = this.props.authStore;

  @observable navi = this.props.navigation;

  // if auto sign in failed, navigate to SignIn screen
  // else navigate to Home screen
  // 如果自动登录失败, 导航到 SignIn 页
  // 否则导航到 Home 页
  @action
  async componentDidMount() {
    this.authStore.autoSignIn()
      .then((canAutoSignIn) => {
        if (canAutoSignIn) {
          this.toHome();
        } else {
          this.toSignIn();
        }
      })
      .catch((err) => {

      });
  }

  toHome = () => { this.navi.navigate('Home'); }

  toSignIn = () => { this.navi.navigate('SignIn'); }

  render() {
    return (
      <View style={gStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AutoSignIn;
