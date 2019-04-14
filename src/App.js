import * as React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { configure } from 'mobx';
import { Provider } from '@ant-design/react-native';

import AuthAutoSignIn from './views/Auth/AutoSignIn';
import AuthSignIn from './views/Auth/SignIn';
import AuthSignUp from './views/Auth/SignUp';

import MainIndex from './views/Main/Index';

import DemoIndex from './views/Demo/Index';
import DemoLayout1 from './views/Demo/Layout1';
import DemoLayout2 from './views/Demo/Layout2';

configure({ enforceActions: 'always' });

const AuthStack = createStackNavigator(
  {
    AuthAutoSignIn: { screen: AuthAutoSignIn },
    AuthSignIn: { screen: AuthSignIn },
    AuthSignUp: { screen: AuthSignUp },
  },
  {
    initialRouteName: 'AuthAutoSignIn',
    headerMode: 'none',
  },
);

const MainStack = createStackNavigator(
  {
    MainIndex: { screen: MainIndex },
  },
  {
    initialRouteName: 'MainIndex',
    headerMode: 'none',
  },
);

const DemoStack = createStackNavigator(
  {
    DemoIndex: { screen: DemoIndex },
    DemoLayout1: { screen: DemoLayout1 },
    DemoLayout2: { screen: DemoLayout2 },
  },
  {
    initialRouteName: 'DemoIndex',
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    AuthStack,
    MainStack,
    DemoStack,
  },
  {
    initialRouteName: 'AuthStack',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppSwitch);

const App = () => (
  <Provider>
    <AppContainer />
  </Provider>
);

export default App;
