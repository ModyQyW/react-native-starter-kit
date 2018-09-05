import * as React from 'react';
import {  } from 'react-native';
import { observer } from 'mobx-react/native';

import SignUp from "../../screens/Sign/SignUp"

@observer
export default class SignUpContainer extends React.Component<Props, State> {

    render() {
        return <SignUp />
    }
}