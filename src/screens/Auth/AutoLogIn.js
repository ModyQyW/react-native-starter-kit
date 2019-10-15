import * as React from 'react'
import { StyleSheet, View, ActivityIndicator, Alert, AsyncStorage } from 'react-native'
import { observable, computed } from 'mobx'
import { observer, MobXProviderContext } from 'mobx-react'
import PropTypes from 'prop-types'

import { layouts } from '@modyqyw/css-styles/react-native/global'

const styles = StyleSheet.create({

})

// handle your auto log in logic here
@observer
class AutoLogIn extends React.Component {
  @observable authStore = this.context.authStore;

  @computed
  get tokenKey () {
    return this.authStore.tokenKey
  }

  async componentDidMount () {
    await this.handleRenewToken()
  }

  async handleRenewToken () {
    const token = await AsyncStorage.getItem(this.tokenKey)
    if (token) {
      this.authStore
        .handleRenewToken()
        .then(({ suc, msg }) => {
          if (suc) {
            this.handleToMainStack()
          } else {
            Alert.alert(
              'Error', msg || 'Failed to get necessary information.',
              [{ text: 'OK', onPress: () => {} }],
              { cancelable: false, onDismiss: () => {} }
            )
            this.handleToAuthLogIn()
          }
        })
    } else {
      this.handleToAuthLogIn()
    }
  }

  handleToMainStack () {
    this.props.navigation.navigate('MainStack')
  }

  handleToAuthLogIn () {
    this.props.navigation.navigate('AuthLogIn')
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
  navigation: PropTypes.object
}

AutoLogIn.contextType = MobXProviderContext

export default AutoLogIn
