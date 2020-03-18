import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthLogIn from '../screens/Auth/LogIn'
import AuthSignUp from '../screens/Auth/SignUp'

const AuthStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='AuthLogIn'
      headerMode='none'
    >
      <Stack.Screen
        name='AuthLogIn'
        component={AuthLogIn}
      />
      <Stack.Screen
        name='AuthSignUp'
        component={AuthSignUp}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
