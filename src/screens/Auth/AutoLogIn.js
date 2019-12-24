import React, { useEffect } from 'react'
import { ActivityIndicator, Alert, AsyncStorage, StyleSheet, View } from 'react-native'
import { observer } from 'mobx-react'
import { useStores } from '../../stores'

import { layouts } from '../../Styles'

const style = {}

const styles = StyleSheet.create(style)

// handle your auto log in logic here
const AutoLogIn = observer((props) => {
  const { authStore } = useStores()

  const handleToMainStack = () => {
    props.navigation.navigate('MainStack')
  }

  const handleToAuthLogIn = () => {
    props.navigation.navigate('AuthLogIn')
  }

  useEffect(() => {
    const handleRenewToken = async () => {
      const token = await AsyncStorage.getItem(authStore.tokenKey)
      if (token !== null) {
        authStore.handleRenewToken()
          .then(({ suc, msg }) => {
            if (suc) {
              handleToMainStack()
            } else {
              Alert.alert(
                'Error', msg || 'Failed to get necessary information.',
                [{ text: 'OK', onPress: () => {} }],
                { cancelable: false, onDismiss: () => {} }
              )
              handleToAuthLogIn()
            }
          })
      } else {
        handleToAuthLogIn()
      }
    }
    handleRenewToken()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View style={layouts.container}>
      <ActivityIndicator />
    </View>
  )
})

export default AutoLogIn
