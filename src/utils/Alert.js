import { Alert as RNAlert } from 'react-native'

const Alert = ({
  title = 'Tips',
  message = '',
  isCancelable = false,
  onPress = () => {}
}) => {
  RNAlert.alert(
    title, message,
    [{ text: 'OK', onPress }],
    { cancelable: isCancelable, onDismiss: () => {} }
  )
}

export default Alert
