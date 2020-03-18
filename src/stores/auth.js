import { AsyncStorage } from 'react-native'
import { action, observable } from 'mobx'
import req from '../utils/Request'

class AuthStore {
  /**
   * @desc token's key in AsyncStorage
   */
  @observable tokenKey = 'token';

  /**
   * @desc the user's info
   * @property {number} id
   * @property {string} username
   * @property {string} username
   * @property {number} role
   */
  @observable userInfo = {
    id: -1,
    username: '---',
    nickname: '---',
    role: -1
  };

  /**
   * @desc set data
   * @param {object} payload
   * @param {string} payload.token
   * @param {number} payload.id
   * @param {string} payload.username
   * @param {string} payload.nickname
   * @param {number} payload.role
   */
  @action
  handleSetDataAsync = async ({ token, id, username, nickname, role }) => {
    this.userInfo = {
      id,
      username,
      nickname,
      role
    }
    await AsyncStorage.setItem(this.tokenKey, token)
  }

  /**
   * @desc reset data
   */
  @action
  handleResetDataAsync = async () => {
    this.userInfo = {
      id: -1,
      username: '---',
      nickname: '---',
      role: -1
    }
    await AsyncStorage.removeItem(this.tokenKey)
  }

  /**
   * @desc log in
   * @param {object} payload
   * @param {string} payload.username
   * @param {string} payload.password
   */
  handleLogInAsync = async ({ username, password }) => {
    return req.post({
      url: '/auth/login',
      data: {
        username,
        password
      }
    }).then(async (res) => {
      const { success, message, data } = res
      if (success) {
        await this.handleSetDataAsync({ ...data })
      }
      return { success, message }
    })
  }

  /**
   * @desc renew token
   */
  handleRenewToken = async () => {
    return req.post({
      url: '/auth/renew'
    }).then(async (res) => {
      const { success, message, data } = res
      if (success) {
        await this.handleSetDataAsync({ ...data })
      } else {
        await this.handleResetDataAsync()
      }
      return { success, message }
    })
  }
}

const auth = new AuthStore()

export default auth
