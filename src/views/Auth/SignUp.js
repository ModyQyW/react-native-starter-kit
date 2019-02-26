import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../styles';

const styles = StyleSheet.create({

});

// handle your sign up logic here
// 在这里处理你的注册逻辑
@inject('authStore')
@observer
class SignUp extends React.Component {
  render() {
    return (
      <View style={gStyles.container}>
        <View>
          <Text>This is the sign up screen.</Text>
        </View>
      </View>
    );
  }
}

export default SignUp;
