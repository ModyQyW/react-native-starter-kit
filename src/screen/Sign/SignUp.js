import React from 'react';
import { View, Text } from 'react-native';
import { observable, action, configure } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import styles from './styles';

export interface Props {
  navigation: any,
  signStore: any,
}
export interface State {}

// handle your sign up logic here
// 在这里处理你的注册逻辑
@inject('signStore')
@observer
class SignUp extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container_SignUp}>
        <View>
          <Text>This is the sign up screen.</Text>
        </View>
      </View>
    );
  }
}

export default SignUp;
