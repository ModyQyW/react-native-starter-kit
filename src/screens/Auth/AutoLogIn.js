import React from 'react'
import { ActivityIndicator, Alert, AsyncStorage, View } from 'react-native'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts } from '../../Styles'

@inject('auth')
@observer
class AutoLogIn extends React.Component {
  async componentDidMount () {
    const token = await AsyncStorage.getItem(this.props.auth.tokenKey)
    if (token !== null) {
      this.props.auth.handleRenewToken()
        .then(({ suc, msg }) => {
          if (suc) {
            this.handleToMainStack()
          } else {
            Alert.alert(
              'Error', msg || 'Failed to get necessary information.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: false, onDismiss: () => {} }
            )
            this.handleToAuthStack()
          }
        })
    } else {
      this.handleToAuthStack()
    }
  }

  handleToMainStack = () => {
    this.props.navigation.navigate('MainStack')
  }

  handleToAuthStack = () => {
    this.props.navigation.navigate('AuthStack')
  }

  render () {
    return (
      <View style={layouts.container}>
        <ActivityIndicator />
      </View>
    )
  }
}

AutoLogIn.propTypes = {
  navigation: PropTypes.any,
  auth: PropTypes.any
}

export default AutoLogIn
