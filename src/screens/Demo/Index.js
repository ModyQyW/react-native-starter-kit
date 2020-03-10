import React from 'react'
import { Button, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts, typography } from '../../Styles'

@observer
class Index extends React.Component {
  handleToDemoLayout1 = () => {
    this.props.navigation.navigate('DemoLayout1')
  }

  handleToDemoLayout2 = () => {
    this.props.navigation.navigate('DemoLayout2')
  }

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Text
            style={[
              layouts.headerMiddle,
              typography.textTitle
            ]}
          >
            Demos
          </Text>
        </View>
        <View style={layouts.body}>
          <Button
            onPress={this.handleToDemoLayout1}
            title='To DemoLayout1'
          />
          <Button
            onPress={this.handleToDemoLayout2}
            title='To DemoLayout2'
          />
        </View>
      </View>
    )
  }
}

Index.propTypes = {
  navigation: PropTypes.any
}

export default Index
