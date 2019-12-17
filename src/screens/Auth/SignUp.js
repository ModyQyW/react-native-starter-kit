import * as React from 'react'
import { Button, Text, View } from 'react-native'
import { observer } from 'mobx-react'

import { layouts, typography } from '../../Styles'

// handle your sign up logic here
const SignUp = observer((props) => {
  const handleBack = () => {
    props.navigation.goBack()
  }

  return (
    <View style={layouts.container}>
      <View style={layouts.header}>
        <Text style={[layouts.headerMiddle, typography.textTitle]}>SignUp</Text>
      </View>
      <View style={layouts.body}>
        <Text>This is the sign up screen.</Text>
        <Text>The button below is from React Native.</Text>
        <Text>Looks like it is a meterial design icon :D</Text>
        <Button
          onPress={handleBack}
          title='Go Back'
        />
      </View>
    </View>
  )
})

export default SignUp
