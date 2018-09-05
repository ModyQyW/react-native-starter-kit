import * as React from 'react';
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"

import SignIn from "../../screens/Sign/SignIn";

@inject("signStore")
@observer
export default class SignInContainer extends React.Component<Props, State> {
    emailInput: any;
    pwdinput: any;
    onSignIn() {
        this.props.navigation.navigate("Home");
    }
    render() {
        return <SignIn onSignIn={() => this.onSignIn()} />;
    }
}
