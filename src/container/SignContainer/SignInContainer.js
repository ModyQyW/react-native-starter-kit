import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import SignIn from '../../screens/Sign/SignIn';

export interface Props {
  navigation: any,
  signStore: any,
}
export interface State {}

@inject('signStore')
@observer
class SignInContainer extends React.Component<Props, State> {
  @observable navi = this.props.navigation;

  toHome() {
    this.navi.navigate('Home');
  }

  toSignUp() {
    this.navi.navigate('SignUp');
  }

  render() {
    return (
      <SignIn
        toHome={() => this.toHome()}
        toSignUp={() => this.toSignUp()}
      />
    );
  }
}

export default SignInContainer;
