import * as React from "react";
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"
import { View, ActivityIndicator, StatusBar } from "react-native";

import styles from "./styles"

@observer
export default class AutoSignIn extends React.Component<Props, State> {

    async count5Sec() {
        () => {
            setTimeout(()=>{}, 5000)
        }
    }

    async componentDidMount() {
        await this.count5Sec();
        this.props.navigation.navigate('SignIn');
    }



	render() {
		return (
            <View style={styles.container_AutoSignIn}>
                <ActivityIndicator />
            </View>
        );
	}
}
