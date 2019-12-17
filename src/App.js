import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { configure } from 'mobx'
import { ThemeProvider } from 'react-native-elements'

import AuthAutoLogIn from './screens/Auth/AutoLogIn'
import AuthLogIn from './screens/Auth/LogIn'
import AuthSignUp from './screens/Auth/SignUp'

import MainIndex from './screens/Main/Index'

import DemoIndex from './screens/Demo/Index'
import DemoLayout1 from './screens/Demo/Layout1'
import DemoLayout2 from './screens/Demo/Layout2'

configure({ enforceActions: 'always' })

const AuthStack = createStackNavigator(
  {
    AuthLogIn: { screen: AuthLogIn },
    AuthSignUp: { screen: AuthSignUp }
  },
  {
    initialRouteName: 'AuthLogIn',
    headerMode: 'none'
  }
)

const MainStack = createStackNavigator(
  {
    MainIndex: { screen: MainIndex }
  },
  {
    initialRouteName: 'MainIndex',
    headerMode: 'none'
  }
)

const DemoStack = createStackNavigator(
  {
    DemoIndex: { screen: DemoIndex },
    DemoLayout1: { screen: DemoLayout1 },
    DemoLayout2: { screen: DemoLayout2 }
  },
  {
    initialRouteName: 'DemoIndex',
    headerMode: 'none'
  }
)

const AppSwitch = createSwitchNavigator(
  {
    AuthAutoLogIn: { screen: AuthAutoLogIn },
    AuthStack,
    MainStack,
    DemoStack
  },
  {
    initialRouteName: 'AuthAutoLogIn'
  }
)

const AppContainer = createAppContainer(AppSwitch)

export default () => {
  // eslint-disable-next-line react/display-name
  return () => {
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
      const loadFonts = async () => {
        await Font.loadAsync({
          antoutline: require('../node_modules/@ant-design/icons-react-native/fonts/antoutline.ttf'),
          antfill: require('../node_modules/@ant-design/icons-react-native/fonts/antfill.ttf')
        })
      }
      loadFonts().then(() => { setIsReady(true) })
    }, [])

    return isReady ? (
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    ) : <AppLoading />
  }
}
