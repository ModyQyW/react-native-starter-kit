import * as React from 'react';
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"

import SignIn from "../../screens/Sign/SignIn";

@inject("signStore")
@observer
export default class SignInContainer extends React.Component<Props, State> {

  toHome() { 
    this.props.navigation.navigate('Home');
  }

  toSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <SignIn 
        toHome={ () => this.toHome() }
        toSignUp={ () => this.toSignUp() }
      />
    );
  }
}
