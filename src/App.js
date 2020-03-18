import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { configure } from 'mobx'
import RouteContainer from './routes/AppContainer'
import StoreContainer from './stores'
import antoutline from '@ant-design/icons-react-native/fonts/antoutline.ttf'
import antfill from '@ant-design/icons-react-native/fonts/antfill.ttf'

configure({ enforceActions: 'always' })

export default () => {
  return class App extends React.Component {
    constructor () {
      super()
      this.state = {
        isReady: false
      }
    }

    componentDidMount () {
      Font.loadAsync({
        antoutline,
        antfill
      }).then(() => {
        this.setState({ isReady: true })
      })
    }

    render () {
      return this.state.isReady
        ? (
          <StoreContainer>
            <RouteContainer />
          </StoreContainer>
        ) : <AppLoading />
    }
  }
}
