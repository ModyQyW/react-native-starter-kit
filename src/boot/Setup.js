import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import React from 'react'
import { MobXProviderContext } from 'mobx-react'

import App from '../App'

export default (stores) => {
  return class Setup extends React.Component {
    constructor () {
      super()
      this.state = {
        isReady: false
      }
    }

    async componentWillMount () {
      await this.loadFonts()
      this.setState({ isReady: true })
    }

    async loadFonts () {
      // await Expo.Font.loadAsync({
      //     write the font you need load here
      //     check https://docs.expo.io/versions/v35.0.0/sdk/font
      // });
      await Font.loadAsync({
        antoutline: require('./../../node_modules/@ant-design/icons-react-native/fonts/antoutline.ttf'),
        antfill: require('./../../node_modules/@ant-design/icons-react-native/fonts/antfill.ttf')
      })
    }

    render () {
      const { isReady } = this.state
      if (!isReady) {
        return <AppLoading />
      }
      return (
        <MobXProviderContext.Provider value={stores}>
          <App />
        </MobXProviderContext.Provider>
      )
    }
  }
}
