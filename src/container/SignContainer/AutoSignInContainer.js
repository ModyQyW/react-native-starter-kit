import * as React from 'react';
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"

import AutoSignIn from "../../screens/Sign/AutoSignIn"

@observer
export default class AutoSignInContainer extends React.Component<Props, State> {
	render() {
		return (<AutoSignIn navigation={this.props.navigation} />);
	}
}
