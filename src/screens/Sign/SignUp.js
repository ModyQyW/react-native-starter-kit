import * as React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react/native';

import styles from './styles';

@observer
export default class SignUp extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.container_SignUp}>
                <View>
                    <Text>This is the sign up screen.</Text>
                </View>
            </View>
        )
    }
}