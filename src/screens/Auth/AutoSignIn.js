import React from 'react';
import {
  StyleSheet, View, ActivityIndicator, Alert, AsyncStorage,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../../general/styles';

const styles = StyleSheet.create({

});

// handle your auto sign in logic here
// 在这里处理你的自动登录逻辑
@inject('authStore')
@observer
class AutoSignIn extends React.Component {
  @observable authStore = this.props.authStore;

  @observable navi = this.props.navigation;

  @action
  async componentDidMount() {
    this.handleCheckToken();
  }

  /**
   * check token status
   * if active => renew
   * if outdated => sign in
   * 检查 token 状态
   * 若有效 => 更新
   * 若过期 => 登录
   * @memberof AutoSignIn
   */
  handleCheckToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        this.authStore
          .renewToken()
          .then((res) => {
            if (res.success) {
              // renew token succeeded
              // 更新 token 成功
              this.toMainStack();
            } else {
              // renew token failed
              // 更新 token 失败
              Alert.alert(
                'Error', res.message || 'Failed to get necessary information.',
                [{ text: 'OK', onPress: () => {} }],
                { cancelable: false, onDismiss: () => {} },
              );
              this.authStore.resetData();
              this.toAuthSignIn();
            }
          });
      } else {
        // has no token
        // 没有 token
        this.toAuthSignIn();
      }
    } catch (err) {
      Alert.alert(
        'Error', `${err}`,
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: false, onDismiss: () => {} },
      );
      this.authStore.resetData();
      this.toAuthSignIn();
    }
  }

  toMainStack = () => {
    this.navi.navigate('MainStack');
  }

  toAuthSignIn = () => {
    this.navi.navigate('AuthSignIn');
  }

  render() {
    return (
      <View style={gStyles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AutoSignIn;
