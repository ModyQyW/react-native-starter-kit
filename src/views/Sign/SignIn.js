import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../styles';

const styles = StyleSheet.create({

});

// handle your sign in logic here
// 在这里处理你的登录逻辑
@inject('signStore')
@observer
class SignIn extends React.Component {
  @observable navi = this.props.navigation;

  toHome = () => {
    this.navi.navigate('Home');
  }

  toSignUp = () => {
    this.navi.navigate('SignUp');
  }

  render() {
    return (
      <View style={gStyles.container}>
        <View>
          <Text>This is a sign in screen.</Text>
          <Button
            onPress={() => this.toHome()}
            title="Jump to Home Screen"
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
