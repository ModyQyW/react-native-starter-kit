import React from 'react'
import { Text, View } from 'react-native'
import { observer } from 'mobx-react'
import { Button } from 'react-native-elements'

import { layouts, typography } from '../../Styles'

// handle your log in logic here
const LogIn = observer((props) => {
  const handleToMainStack = () => {
    props.navigation.navigate('MainStack')
  }

  const handleToAuthSignUp = () => {
    props.navigation.navigate('AuthSignUp')
  }

  return (
    <View style={layouts.container}>
      <View style={layouts.header}>
        <Text style={[layouts.headerMiddle, typography.textTitle]}>LogIn</Text>
      </View>
      <View style={layouts.body}>
        <Text>This is the log in screen.</Text>
        <Text>Buttons below are from React Native Elements.</Text>
        <Button
          onPress={handleToMainStack}
          title='Navigate to Main Stack'
        />
        <Button
          onPress={handleToAuthSignUp}
          title='Navigate to Signup Screen'
        />
      </View>
    </View>
  )
})

export default LogIn
