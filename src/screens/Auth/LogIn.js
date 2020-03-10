import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts, typography } from '../../Styles'

@observer
class LogIn extends React.Component {
  handleToMainStack = () => {
    this.props.navigation.navigate('MainStack')
  }

  handleToAuthSignUp = () => {
    this.props.navigation.navigate('AuthSignUp')
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
            LogIn
          </Text>
        </View>
        <View style={layouts.body}>
          <Text>LogIn Screen</Text>
          <Button
            onPress={this.handleToMainStack}
            title='To MainStack'
          />
          <Button
            onPress={this.handleToAuthSignUp}
            title='To AuthSignup'
          />
        </View>
      </View>
    )
  }
}

LogIn.propTypes = {
  navigation: PropTypes.any
}

export default LogIn
