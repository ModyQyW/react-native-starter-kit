import * as React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { Icon } from 'react-native-elements'
import { Provider, Toast } from '@ant-design/react-native'
import { layouts, typography } from '../../Styles'

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    height: 25
  }
})

@observer
class Layout2 extends React.Component {
  @observable cnt = 1;

  @observable data = [];

  constructor (props) {
    super(props)
    bindAll(this, [
      'handleAddData',
      'handleBack',
      'onExtractKey',
      'onRenderListItem',
      'handlePressListItem'
    ])
  }

  componentDidMount () {
    this.handleAddData()
  }

  @action
  handleAddData () {
    for (let i = (this.cnt - 1) * 10 + 1, len = this.cnt * 10; i <= len; i += 1) {
      this.data.push({
        label: `label${i - 1}`,
        value: i - 1
      })
    }
    this.data = this.data.slice()
    this.cnt += 1
  }

  handleBack () {
    this.props.navigation.goBack()
  }

  onExtractKey (item) {
    return item.value.toString()
  }

  onRenderListItem ({ item }) {
    return (
      <TouchableOpacity
        accessibilityRole='none'
        onPress={() => this.handlePressListItem(item)}
      >
        <View style={styles.listItem}>
          <Text>
            label: {item.label} value: {item.value}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  handlePressListItem (item) {
    Toast.info(`You just clicked (index: ${item.value}, label: ${item.label}) item`)
  }

  render () {
    return (
      <Provider>
        <View style={layouts.container}>
          <View style={layouts.header}>
            <Icon
              name='arrow-back'
              size={26}
              onPress={this.handleBack}
            />
            <Text style={[layouts.headerMiddle, typography.textTitle]}>Demo Layout2</Text>
            <Icon
              size={26}
              name='menu'
            />
          </View>
          <View style={layouts.body}>
            <View style={layouts.bodyNav}>
              <Text>nav bar styles depend on designer.</Text>
              <Button
                onPress={this.handleAddData}
                title='Add Data'
              />
            </View>
            <FlatList
              style={layouts.bodyMain}
              data={this.data}
              keyExtractor={this.onExtractKey}
              renderItem={this.onRenderListItem}
            />
          </View>
          <View style={layouts.footer}>
            <Text style={typography.textSecondary}>
            Author: ModyQyW. MIT License.
            </Text>
          </View>
        </View>
      </Provider>
    )
  }
}

Layout2.propTypes = {
  navigation: PropTypes.object
}

export default Layout2
