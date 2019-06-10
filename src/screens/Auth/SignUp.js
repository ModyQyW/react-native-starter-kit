import React from 'react';
import {
  StyleSheet, View, Text, Button,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../../general/styles';

const styles = StyleSheet.create({

});

// handle your sign up logic here
// 在这里处理你的注册逻辑
@inject('authStore')
@observer
class SignUp extends React.Component {
  @observable navi = this.props.navigation;

  onBack = () => {
    this.navi.goBack();
  }

  render() {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.header}>
          <Text style={[gStyles.headerMiddle, gStyles.textTitle]}>SignUp</Text>
        </View>
        <View style={gStyles.body}>
          <Text>This is the sign up screen.</Text>
          <Text>The button below is from React Native.</Text>
          <Text>Looks like it is a meterial design icon :D</Text>
          <Button
            onPress={this.onBack}
            title="Go Back"
          />
        </View>
      </View>
    );
  }
}

export default SignUp;
