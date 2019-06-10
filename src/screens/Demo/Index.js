import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import gStyles from '../../general/styles';

@observer
class Index extends React.Component {
  @observable navi = this.props.navigation;

  toLayout1 = () => {
    this.navi.navigate('DemoLayout1');
  }

  toLayout2 = () => {
    this.navi.navigate('DemoLayout2');
  }

  render() {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.header}>
          <Text style={[gStyles.headerMiddle, gStyles.textTitle]}>Demos</Text>
        </View>
        <View style={gStyles.body}>
          <Button
            onPress={this.toLayout1}
            title="Navigate to Layout1"
          />
          <Button
            onPress={this.toLayout2}
            title="Navigate to Layout2"
          />
        </View>
      </View>
    );
  }
}

export default Index;
