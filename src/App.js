import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { configure } from 'mobx'
import { Provider } from 'mobx-react/native'
import app from '../src/stores/app'
import auth from '../src/stores/auth'
import { AppearanceProvider } from 'react-native-appearance'
import { ThemeProvider } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import AuthAutoLogIn from './screens/Auth/AutoLogIn'
import AuthLogIn from './screens/Auth/LogIn'
import AuthSignUp from './screens/Auth/SignUp'

import MainIndex from './screens/Main/Index'

import DemoIndex from './screens/Demo/Index'
import DemoLayout1 from './screens/Demo/Layout1'
import DemoLayout2 from './screens/Demo/Layout2'

configure({ enforceActions: 'always' })

const stores = {
  app,
  auth
}

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

export default () => {
  return class App extends React.Component {
    constructor () {
      super()
      this.state = {
        isReady: false
      }
    }

    componentDidMount () {
      this.loadFonts()
    }

    async loadFonts () {
      await Font.loadAsync({
        antoutline: require('../node_modules/@ant-design/icons-react-native/fonts/antoutline.ttf'),
        antfill: require('../node_modules/@ant-design/icons-react-native/fonts/antfill.ttf')
      })

      this.setState({ isReady: true })
    }

    render () {
      return this.state.isReady
        ? (
          <AppearanceProvider>
            <Provider {...stores}>
              <ThemeProvider>
                <AppContainer />
              </ThemeProvider>
            </Provider>
          </AppearanceProvider>
        ) : <AppLoading />
    }
  }
}
