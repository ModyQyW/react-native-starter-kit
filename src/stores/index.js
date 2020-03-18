import React from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { Provider as MobxProvider } from 'mobx-react/native'
import { ThemeProvider as RNEProvider } from 'react-native-elements'
import { Provider as ADRNProvider } from '@ant-design/react-native'
import app from './app'
import auth from './auth'

const stores = {
  app,
  auth
}

const StoreContainer = ({ children }) => (
  <AppearanceProvider>
    <MobxProvider {...stores}>
      <RNEProvider>
        <ADRNProvider>
          {children}
        </ADRNProvider>
      </RNEProvider>
    </MobxProvider>
  </AppearanceProvider>
)

export default StoreContainer
