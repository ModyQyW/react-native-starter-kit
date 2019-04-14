import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import { Button } from '@ant-design/react-native';

import Styles from '../../mixins/styles';

const styles = StyleSheet.create({

});

// handle your sign in logic here
// 在这里处理你的登录逻辑
@inject('authStore')
@observer
class SignIn extends React.Component {
  @observable navi = this.props.navigation;

  toMainStack = () => {
    this.navi.navigate('MainIndex');
  }

  toAuthSignUp = () => {
    this.navi.navigate('AuthSignUp');
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>This is the sign in screen.</Text>
        <Text>Buttons below are from Ant Design Mobile RN.</Text>
        <Text>1st is large type</Text>
        <Text>2nd is small type</Text>
        <Button onPress={() => this.toMainStack()}>
          <Text>Jump to Main Stack</Text>
        </Button>
        <Button onPress={() => this.toAuthSignUp()} size="small">
          <Text>Jump to Signup Screen</Text>
        </Button>
      </View>
    );
  }
}

export default SignIn;
