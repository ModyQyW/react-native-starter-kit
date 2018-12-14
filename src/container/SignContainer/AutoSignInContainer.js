import React from 'react';
import { observable, action, runInAction } from 'mobx';
import { observer, inject } from 'mobx-react/native';

import AutoSignIn from '../../screens/Sign/AutoSignIn';

export interface Props {
  navigation: any,
  signStore: any,
}
export interface State {}

@inject('signStore')
@observer
class AutoSignInContainer extends React.Component<Props, State> {
  @observable navi = this.props.navigation;

  // can auto sign in or not
  // 是否能自动登录
  async componentWillMount() {
    // console.disableYellowBox = true;
  }

  toHome() {
    this.navi.navigate('Home');
  }

  toSignIn() {
    this.navi.navigate('SignIn');
  }

  render() {
    return (
      <AutoSignIn
        isAutoSignIn={this.isAutoSignIn}
        toHome={() => this.toHome()}
        toSignIn={() => this.toSignIn()}
      />
    );
  }
}

export default AutoSignInContainer;
