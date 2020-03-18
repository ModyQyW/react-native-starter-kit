import { Toast as ADRNToast } from '@ant-design/react-native'

const Toast = {
  success: ({
    message = '',
    duration = 1,
    onClose = () => {},
    mask = true
  }) => {
    return ADRNToast.success(message, duration, onClose, mask)
  },
  fail: ({
    message = '',
    duration = 1,
    onClose = () => {},
    mask = true
  }) => {
    return ADRNToast.fail(message, duration, onClose, mask)
  },
  info: ({
    message = '',
    duration = 1,
    onClose = () => {},
    mask = true
  }) => {
    return ADRNToast.info(message, duration, onClose, mask)
  },
  loading: ({
    message = '',
    duration = 1,
    onClose = () => {},
    mask = true
  }) => {
    return ADRNToast.loading(message, duration, onClose, mask)
  },
  offline: ({
    message = '',
    duration = 1,
    onClose = () => {},
    mask = true
  }) => {
    return ADRNToast.offline(message, duration, onClose, mask)
  }
}

export default Toast
