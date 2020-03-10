import React from 'react'
import { Button, Text, View } from 'react-native'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts, typography } from '../../Styles'

@observer
class SignUp extends React.Component {
  handleBack = () => {
    this.props.navigation.goBack()
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
            SignUp
          </Text>
        </View>
        <View style={layouts.body}>
          <Text>SignUp Screen</Text>
          <Button
            onPress={this.handleBack}
            title='Back'
          />
        </View>
      </View>
    )
  }
}

SignUp.propTypes = {
  navigation: PropTypes.any
}

export default SignUp
