import * as React from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, Button,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import { Icon } from 'react-native-elements';
import { Provider, Toast } from '@ant-design/react-native';

import gStyles from '../../general/styles';

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 25,
  },
});

@observer
class LayoutDemo2 extends React.Component {
  @observable navi = this.props.navigation;

  @observable cnt = 1;

  @observable data = [];

  componentDidMount() {
    this.onAddData();
  }

  @action
  onAddData = () => {
    for (let i = (this.cnt - 1) * 10 + 1; i <= this.cnt * 10; i += 1) {
      this.data.push({
        label: `label${i - 1}`,
        value: i - 1,
      });
    }
    this.data = this.data.slice();
    this.cnt += 1;
  }

  onBack = () => {
    this.navi.goBack();
  }

  handlePressListItem = (item) => {
    Toast.info(`You just clicked (index: ${item.value}, label: ${item.label}) item`);
  }

  render() {
    return (
      <Provider>
        <View style={gStyles.container}>
          <View style={gStyles.header}>
            <Icon
              name="arrow-back"
              size={26}
              onPress={this.onBack}
            />
            <Text style={[gStyles.headerMiddle, gStyles.textTitle]}>Demo Layout2</Text>
            <Icon
              size={26}
              name="menu"
            />
          </View>
          <View style={gStyles.body}>
            <View style={gStyles.bodyNav}>
              <Text>nav bar styles depend on designer.</Text>
              <Button
                onPress={this.onAddData}
                title="Add Data"
              />
            </View>
            <FlatList
              style={gStyles.bodyMain}
              data={this.data}
              keyExtractor={item => item.value.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this.handlePressListItem(item)}>
                  <View style={styles.listItem}>
                    <Text>
                    label:
                      {item.label}
                      {' '}
                    value:
                      {item.value}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={gStyles.footer}>
            <Text style={gStyles.textSecondary}>
            Author: ModyQyW. MIT License.
            </Text>
          </View>
        </View>
      </Provider>
    );
  }
}

export default LayoutDemo2;
