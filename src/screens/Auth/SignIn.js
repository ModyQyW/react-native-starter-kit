import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import { Button } from 'react-native-elements';

import gStyles from '../../general/styles';

const styles = StyleSheet.create({

});

// handle your sign in logic here
// 在这里处理你的登录逻辑
@inject('authStore')
@observer
class SignIn extends React.Component {
  @observable navi = this.props.navigation;

  onToMainStack = () => {
    this.navi.navigate('MainStack');
  }

  onToAuthSignUp = () => {
    this.navi.navigate('AuthSignUp');
  }

  render() {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.header}>
          <Text style={[gStyles.headerMiddle, gStyles.textTitle]}>SignIn</Text>
        </View>
        <View style={gStyles.body}>
          <Text>This is the sign in screen.</Text>
          <Text>Buttons below are from React Native Elements.</Text>
          <Button
            onPress={this.onToMainStack}
            title="Navigate to Main Stack"
          />
          <Button
            onPress={this.onToAuthSignUp}
            title="Navigate to Signup Screen"
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
