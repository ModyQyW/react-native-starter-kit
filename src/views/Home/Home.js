import * as React from 'react';
import { View, Text } from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import { Button } from '@ant-design/react-native';

import gStyles from '../styles';

@observer
class Home extends React.Component {
  render() {
    return (
      <View style={gStyles.container}>
        <View style={gStyles.viewStart}>
          <Text>Do something to start coding!</Text>
          <Text>做点什么, 开始打码吧!</Text>
        </View>
      </View>
    );
  }
}

export default Home;
