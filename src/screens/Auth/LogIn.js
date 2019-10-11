import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import bindAll from 'lodash.bindall'

import { Button } from 'react-native-elements'
import { layouts, typography } from '@modyqyw/css-styles/app/reactnative/gloabl'

const styles = StyleSheet.create({

})

// handle your log in logic here
@observer
class LogIn extends React.Component {
  @observable navi = this.props.navigation;

  constructor (props) {
    super(props)
    bindAll(this, [
      'handleToMainStack',
      'handleToAuthSignUp'
    ])
  }

  handleToMainStack () {
    this.navi.navigate('MainStack')
  }

  handleToAuthSignUp () {
    this.navi.navigate('AuthSignUp')
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
