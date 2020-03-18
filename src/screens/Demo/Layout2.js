import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Toast from '../../utils/Toast'

import { layouts, typography } from '../../Styles'

const style = {
  listItem: {
    width: '100%',
    height: 25
  }
}

const styles = StyleSheet.create(style)

@observer
class DemoLayout2 extends React.Component {
  @observable cnt = 1

  @observable data = []

  @action
  handleAddData = () => {
    const tmp = 10 * this.cnt
    for (let i = (this.cnt - 1) * 10 + 1; i <= tmp; i += 1) {
      this.data.push({
        label: `label${i - 1}`,
        value: i - 1
      })
    }
    this.data = this.data.slice()
    this.cnt += 1
  }

  componentDidMount () {
    this.handleAddData()
  }

  handleBack = () => {
    this.props.navigation.goBack()
  }

  onExtractKey = (item) => item.value.toString()

  handlePressListItem = (item) => {
    Toast.info({
      message: `You just clicked (index: ${item.value}, label: ${item.label}) item`
    })
  }

  onRenderListItem = ({ item }) => (
    <TouchableOpacity
      accessibilityRole='none'
      onPress={() => { this.handlePressListItem(item) }}
    >
      <View style={styles.listItem}>
        <Text>
          label: {item.label} value: {item.value}
        </Text>
      </View>
    </TouchableOpacity>
  )

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Icon
            name='arrow-back'
            size={26}
            onPress={this.handleBack}
          />
          <Text
            style={[
              layouts.headerMiddle,
              typography.textTitle
            ]}
          >
            DemoLayout2
          </Text>
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
    )
  }
}

DemoLayout2.propTypes = {
  navigation: PropTypes.any
}

export default DemoLayout2
