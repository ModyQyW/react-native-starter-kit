import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import Styles from '../../mixins/styles';


@observer
class Index extends React.Component {
  @observable navi = this.props.navigation;

  toDemoStack = () => {
    this.navi.navigate('DemoIndex');
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text>Do something to start coding!</Text>
        <Text>做点什么，开始打码吧！</Text>
        <Button
          onPress={() => this.toDemoStack()}
          title="Jump to Demo Index"
        />
      </View>
    );
  }
}

export default Index;
