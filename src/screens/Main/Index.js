import React from 'react'
import { Button, View, Text } from 'react-native'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts, typography } from '../../Styles'

@observer
class Index extends React.Component {
  handleToDemoStack = () => {
    this.props.navigation.navigate('DemoStack')
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
            rn-mobx-scaffold
          </Text>
        </View>
        <View style={layouts.body}>
          <Text>Do something to start coding!</Text>
          <Button
            onPress={this.handleToDemoStack}
            title='To DemoStack'
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
