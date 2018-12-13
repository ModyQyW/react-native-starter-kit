import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observer, inject } from 'mobx-react/native';
import { observable, action, configure } from 'mobx';

import styles from './styles';

export interface Props {
  navigation: any,
  signStore: any,
}
export interface State {}

// handle your sign in logic here
// 在这里处理你的登录逻辑
@inject('signStore')
@observer
class SignIn extends React.Component<Props, State> {
  render() {
    const { toHome } = this.props;
    return (
      <View style={styles.container_SignIn}>
        <View>
          <Text>This is a sign in screen.</Text>
          <Button
            onPress={() => toHome()}
            title="Jump to Home Screen"
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
