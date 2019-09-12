import { AsyncStorage } from 'react-native'
import { observable, action } from 'mobx'
import req from '../utils/request'

class AuthStore {
  @observable tokenKey = 'token';

  @observable token = '';

  @observable userInfo = null;

  /**
   * set data
   * 设置数据
   * @param {Object} anonymous
   * @param {String} anonymous.token
   * @param {Object} anonymous.userInfo
   * @memberof AuthStore
   */
  @action
  async handleSetData ({ token = '', userInfo = {} }) {
    this.token = token
    this.userInfo = userInfo
    await AsyncStorage.setItem(this.tokenKey, token)
  }

  /**
   * reset data
   * 重置数据
   * @memberof AuthStore
   */
  @action
  async handleResetData () {
    this.token = ''
    this.userInfo = null
    await AsyncStorage.removeItem(this.tokenKey)
  }

  /**
   * log in
   * 登入
   * @param {Object} anonymous
   * @param {String} anonymous.username
   * @param {String} anonymous.password
   * @returns {Promise.<Object>}
   * @memberof App
   */
  handleLogIn ({ username, password }) {
    return req.post({
      url: '/auth/signin',
      data: {
        username,
        password
      }
    }).then(async ({ success, message, token, userInfo }) => {
      if (success) {
        await this.handleSetData({ token, userInfo })
      }
      return { success, message }
    })
  }

  /**
   * renew token
   * 更新登录态
   * @returns {Object} res
   * @returns {Boolean} res.success
   * @returns {String} res.message
   * @memberof AuthStore
   */
  handleRenewToken = async () => {
    return req.post({
      url: '/auth/renew'
    }).then(async ({ success, message, token, userInfo }) => {
      if (success) {
        await this.handleSetData({ token, userInfo })
      } else {
        await this.handleResetData()
      }
      return { success, message }
    })
  }
}

export default new AuthStore()
