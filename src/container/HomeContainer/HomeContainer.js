import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"

import Home from "../../screens/Home/Home"

@observer
export default class HomeContainer extends React.Component<Props, State> {
	render() {
		return (<Home />);
	}
}
