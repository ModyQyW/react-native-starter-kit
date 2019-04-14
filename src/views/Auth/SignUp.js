import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import Styles from '../../mixins/styles';

const styles = StyleSheet.create({

});

// handle your sign up logic here
// 在这里处理你的注册逻辑
@inject('authStore')
@observer
class SignUp extends React.Component {
  @observable navi = this.props.navigation;

  handleBack = () => {
    this.navi.goBack();
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>This is the sign up screen.</Text>
        <Text>The button below is from React Native.</Text>
        <Text>Look like a middle type:D</Text>
        <Button
          onPress={() => this.handleBack()}
          title="Go Back"
        />
      </View>
    );
  }
}

export default SignUp;
