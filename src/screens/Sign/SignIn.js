import * as React from 'react';
import { View, Text, Button } from "react-native";
import { observer, inject } from "mobx-react/native";
import { observable, action, configure } from "mobx"

import styles from './styles';

// handle your sign in logic here
// 在这里处理你的登录逻辑
@inject("signStore")
@observer
export default class SignIn extends React.Component<Props, State> {
  
  render() {
    return (
      <View style={styles.container_SignIn}>
        <View>
          <Text>This is a sign in screen.</Text>
          <Button onPress={ () => this.props.toHome() }
                  title="Jump to Home Screen" />
        </View>
      </View>
    );
  }
}
