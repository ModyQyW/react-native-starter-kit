import * as React from 'react';
import {
  View, Text, StyleSheet, FlatList, TouchableOpacity, Button,
} from 'react-native';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import { Icon, Toast } from '@ant-design/react-native';

import Styles from '../../mixins/styles';
import Colors from '../../mixins/colors';

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
    this.addData();
  }

  @action
  addData = () => {
    for (let i = (this.cnt - 1) * 10 + 1; i <= this.cnt * 10; i += 1) {
      this.data.push({
        label: `label${i - 1}`,
        value: i - 1,
      });
    }
    this.data = this.data.slice();
    this.cnt += 1;
  }

  handleBack = () => {
    this.navi.goBack();
  }

  handlePressListItem = (item) => {
    Toast.info(`You just clicked (index: ${item.value}, label: ${item.label}) item`);
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={[Styles.header3, styles.header]}>
          <Icon
            name="left"
            onPress={this.handleBack}
          />
          <Text style={Styles.textTitle}>Header</Text>
          <Icon name="menu" />
        </View>
        <View style={Styles.body2}>
          <View style={Styles.body2Bar}>
            <Text>nav bar styles depend on designer.</Text>
            <Button
              onPress={this.addData}
              title="add data"
            />
          </View>
          <FlatList
            style={Styles.body2Main}
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
        <View style={Styles.footer}>
          <Text style={Styles.textSecondary}>
            Author: ModyQyW. MIT License.
          </Text>
        </View>
      </View>
    );
  }
}

export default LayoutDemo2;
