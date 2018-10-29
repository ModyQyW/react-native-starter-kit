import * as React from 'react';
import { observer, inject } from "mobx-react/native";
import { observable, action, runInAction } from "mobx"

import AutoSignIn from "../../screens/Sign/AutoSignIn"

@inject("signStore")
@observer
export default class AutoSignInContainer extends React.Component<Props, State> {

 

  // can auto sign in or not
  // 是否能自动登录
  async componentWillMount() {
    console.disableYellowBox = true;
  }

  toHome() {
    this.props.navigation.navigate('Home');
  }

  toSignIn() { 
    console.log('toSignIn');
    this.props.navigation.navigate('SignIn');
  }

	render() {
    return (
      <AutoSignIn 
        isAutoSignIn={ this.isAutoSignIn }
        toHome={ () => this.toHome() }
        toSignIn={ () => this.toSignIn() }
      />
    );
	}
}
