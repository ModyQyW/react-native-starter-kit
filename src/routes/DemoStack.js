import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DemoIndex from '../screens/Demo/Index'
import DemoLayout1 from '../screens/Demo/Layout1'
import DemoLayout2 from '../screens/Demo/Layout2'

const DemoStack = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='DemoIndex'
      headerMode='none'
    >
      <Stack.Screen
        name='DemoIndex'
        component={DemoIndex}
      />
      <Stack.Screen
        name='DemoLayout1'
        component={DemoLayout1}
      />
      <Stack.Screen
        name='DemoLayout2'
        component={DemoLayout2}
      />
    </Stack.Navigator>
  )
}

export default DemoStack
