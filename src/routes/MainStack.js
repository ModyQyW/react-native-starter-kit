import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainIndex from '../screens/Main/Index'

const MainStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='MainIndex'
      headerMode='none'
    >
      <Stack.Screen
        name='MainIndex'
        component={MainIndex}
      />
    </Stack.Navigator>
  )
}

export default MainStack
