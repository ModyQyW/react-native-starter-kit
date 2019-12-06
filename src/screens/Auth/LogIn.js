import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { observer } from 'mobx-react'
import { Button } from 'react-native-elements'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { layouts, typography } from '../../Styles'

const styles = StyleSheet.create({

})

// handle your log in logic here
@observer
class LogIn extends React.Component {
  constructor (props) {
    super(props)
    bindAll(this, [
      'handleToMainStack',
      'handleToAuthSignUp'
    ])
  }

  handleToMainStack () {
    this.props.navigation.navigate('MainStack')
  }

  handleToAuthSignUp () {
    this.props.navigation.navigate('AuthSignUp')
  }

  render () {
    return (
      <View style={layouts.container}>
        <View style={layouts.header}>
          <Text style={[layouts.headerMiddle, typography.textTitle]}>LogIn</Text>
        </View>
        <View style={layouts.body}>
          <Text>This is the log in screen.</Text>
          <Text>Buttons below are from React Native Elements.</Text>
          <Button
            onPress={this.handleToMainStack}
            title='Navigate to Main Stack'
          />
          <Button
            onPress={this.handleToAuthSignUp}
            title='Navigate to Signup Screen'
          />
        </View>
      </View>
    )
  }
}

LogIn.propTypes = {
  navigation: PropTypes.object
}

export default LogIn
