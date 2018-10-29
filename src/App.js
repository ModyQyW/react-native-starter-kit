import React from "react";
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import AutoSignIn from "./container/SignContainer/AutoSignInContainer"
import SignIn from "./container/SignContainer/SignInContainer";
import SignUp from "./container/SignContainer/SignUpContainer"
import Home from "./container/HomeContainer/HomeContainer";


const SignStack = createStackNavigator(
    {
        AutoSignIn: { screen: AutoSignIn },
        SignIn: { screen: SignIn },
        SignUp: { screen: SignUp }
    },
    {
        initialRouteName: "AutoSignIn",
        headerMode: 'none'
    })

const HomeStack = createStackNavigator(
    {
        Home: { screen: Home },
    },
    {
        initialRouteName: "Home",
        headerMode: 'none'
    })

const AppSwitch = createSwitchNavigator(
    {
        Sign: SignStack,
        Home: HomeStack
    },
    {
        initialRouteName: "Sign",
        headerMode: 'none'
    }
)

export default class App extends React.Component<Props, State> {
    render() {
      return <AppSwitch />;
    }
}
