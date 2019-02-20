import React from 'react';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { configure } from 'mobx';

import AutoSignIn from './views/Sign/AutoSignIn';
import SignIn from './views/Sign/SignIn';
import SignUp from './views/Sign/SignUp';
import Home from './views/Home/Home';

configure({ enforceActions: 'always' });

const SignStack = createStackNavigator(
  {
    AutoSignIn: { screen: AutoSignIn },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
  },
  {
    initialRouteName: 'AutoSignIn',
    headerMode: 'none',
  },
);

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

const AppSwitch = createSwitchNavigator(
  {
    Sign: SignStack,
    Home: HomeStack,
  },
  {
    initialRouteName: 'Sign',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppSwitch);

const App = () => <AppContainer />;

export default App;
