import React, { useEffect } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { action, toJS } from 'mobx'
import { observer, useLocalStore } from 'mobx-react'
import { Icon } from 'react-native-elements'
import { Provider, Toast } from '@ant-design/react-native'
import PropTypes from 'prop-types'

import { layouts, typography } from '../../Styles'

const style = {
  listItem: {
    width: '100%',
    height: 25
  }
}

const styles = StyleSheet.create(style)

const Layout2 = observer((props) => {
  // ls is short for local store
  const ls = useLocalStore(() => ({
    cnt: 1,
    data: [],
    handleAddData: action(() => {
      for (let i = (ls.cnt - 1) * 10 + 1, len = ls.cnt * 10; i <= len; i += 1) {
        ls.data.push({
          label: `label${i - 1}`,
          value: i - 1
        })
      }
      ls.cnt += 1
    })
  }))

  useEffect(() => {
    ls.handleAddData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleBack = () => {
    props.navigation.goBack()
  }

  const onExtractKey = (item) => item.value.toString()

  const handlePressListItem = (item) => {
    Toast.info(`You just clicked (index: ${item.value}, label: ${item.label}) item`)
  }

  const onRenderListItem = ({ item }) => (
    <TouchableOpacity
      accessibilityRole='none'
      onPress={() => { handlePressListItem(item) }}
    >
      <View style={styles.listItem}>
        <Text>
            label: {item.label} value: {item.value}
        </Text>
      </View>
    </TouchableOpacity>
  )

  onRenderListItem.propTypes = {
    item: PropTypes.exact({
      label: PropTypes.string,
      value: PropTypes.number
    })
  }

  return (
    <Provider>
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Icon
            name='arrow-back'
            size={26}
            onPress={handleBack}
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
              onPress={ls.handleAddData}
              title='Add Data'
            />
          </View>
          <FlatList
            style={layouts.bodyMain}
            data={toJS(ls.data)}
            keyExtractor={onExtractKey}
            renderItem={onRenderListItem}
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
})

export default Layout2
