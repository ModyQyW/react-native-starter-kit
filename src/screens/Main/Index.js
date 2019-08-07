import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../../general/styles';


@observer
class Index extends React.Component {
  @observable navi = this.props.navigation;

  onToDemoStack = () => {
    this.navi.navigate('DemoStack');
  }

  render() {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.header}>
          <Text style={[gStyles.headerMiddle, gStyles.textTitle]}>rn-mobx-starter-kit</Text>
        </View>
        <View style={gStyles.body}>
          <Text>Do something to start coding!</Text>
          <Text>做点什么，开始打码吧！</Text>
          <Button
            onPress={this.onToDemoStack}
            title="Jump to Demo Index"
          />
        </View>
      </View>
    );
  }
}

export default Index;
