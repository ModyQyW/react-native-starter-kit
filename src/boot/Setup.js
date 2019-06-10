import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React from 'react';
import { Provider } from 'mobx-react/native';

import App from '../App';

export default function (stores) {
  return class Setup extends React.Component {
    constructor() {
      super();
      this.state = {
        isReady: false,
      };
    }

    async componentWillMount() {
      await this.loadFonts();
      this.setState({ isReady: true });
    }

    /* eslint-disable */
    async loadFonts() {
      // await Expo.Font.loadAsync({
      //     write the font you need load here | 在这里引入你需要的字体
      //     check | 详见  https://docs.expo.io/versions/v33.0.0/sdk/font
      // });
      await Font.loadAsync({
        'antoutline': require('./../../node_modules/@ant-design/icons-react-native/fonts/antoutline.ttf'),
        'antfill': require('./../../node_modules/@ant-design/icons-react-native/fonts/antfill.ttf'),
      });
    }
    /* eslint-enable */

    render() {
      const { isReady } = this.state;
      if (!isReady) {
        return <AppLoading />;
      }
      return (
        <Provider {...stores}>
          <App />
        </Provider>
      );
    }
  };
}
