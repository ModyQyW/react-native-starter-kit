import * as React from 'react';
import { View, Text, Button } from "react-native";
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"

import styles from './styles';

@observer
export default class SignIn extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container_SignIn}>
                <View>
                    <Text>This is a sign in screen.</Text>
                    <Button onPress={() => this.props.onSignIn()}
                            title="Jump to Home Screen" />
                </View>
            </View>
        );
    }
}
