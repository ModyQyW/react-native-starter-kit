import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AuthAutoLogIn from '../screens/Auth/AutoLogIn'
import AuthStack from './AuthStack'
import MainStack from './MainStack'
import DemoStack from './DemoStack'

const AppContainer = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='AuthAutoLogIn'
        headerMode='none'
      >
        <Stack.Screen
          name='AuthAutoLogIn'
          component={AuthAutoLogIn}
        />
        <Stack.Screen
          name='AuthStack'
          component={AuthStack}
        />
        <Stack.Screen
          name='MainStack'
          component={MainStack}
        />
        <Stack.Screen
          name='DemoStack'
          component={DemoStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
