import { Appearance } from 'react-native-appearance'
import { observable, action } from 'mobx'

class App {
  @observable colorScheme = Appearance.getColorScheme()

  @action
  handleAddColorSchemeListener = () => {
    Appearance.addChangeListener(({ colorScheme }) => {
      this.colorScheme = colorScheme
    })
  }
}

const app = new App()

app.handleAddColorSchemeListener()

export default app
