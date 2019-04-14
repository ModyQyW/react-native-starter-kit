import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import Styles from '../../mixins/styles';

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
      <View style={Styles.container}>
        <Text>Check demos.</Text>
        <Button
          onPress={() => this.toLayout1()}
          title="to Layout1"
        />
        <Button
          onPress={() => this.toLayout2()}
          title="to Layout2"
        />
      </View>
    );
  }
}

export default Index;
