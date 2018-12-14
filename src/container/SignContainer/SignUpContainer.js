import React from 'react';
import { } from 'react-native';
import { observable } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import SignUp from '../../screens/Sign/SignUp';

export interface Props {
  navigation: any,
  signStore: any,
}
export interface State {}

@inject('signStore')
@observer
class SignUpContainer extends React.Component<Props, State> {
  @observable navi = this.props.navigation;

  toSignIn = () => { this.navi.navigate('SignIn'); }

  render() {
    return <SignUp />;
  }
}

export default SignUpContainer;
