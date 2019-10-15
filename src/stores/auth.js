import { AsyncStorage } from 'react-native'
import { observable, action } from 'mobx'
import req from '../utils/request'

/**
 * @typedef  {Object}  UserInfo
 * @property {Number}  id
 * @property {String}  username
 * @property {String}  nickname
 * @property {Number}  role
 *
 * @typedef  {Object}  Result
 * @property {Boolean} suc
 * @property {String}  msg
 * @property {Any}     data
 */

class AuthStore {
  /**
   * @description token's key in AsyncStorage
   * @type {String}
   */
  @observable tokenKey = 'token';

  /**
   * @description token's value in AsyncStorage
   * @type {String}
   */
  @observable token = '';

  /**
   * @description the user's info
   * @type {UserInfo}
   */
  @observable userInfo = {
    id: -1,
    username: '---',
    nickname: '---',
    role: -1
  };

  /**
   * @description set data
   * @param {Object} annoymous
   * @param {String} annoymous.token
   * @param {Number} annoymous.id
   * @param {String} annoymous.username
   * @param {String} annoymous.nickname
   * @param {Number} annoymous.role
   * @memberof AuthStore
   */
  @action
  async handleSetData ({ token, id, username, nickname, role }) {
    this.token = token
    this.userInfo = {
      id,
      username,
      nickname,
      role
    }
    await AsyncStorage.setItem(this.tokenKey, token)
  }

  /**
   * @description reset data
   * @memberof AuthStore
   */
  @action
  async handleResetData () {
    this.token = ''
    this.userInfo = {
      id: -1,
      username: '---',
      nickname: '---',
      role: -1
    }
    await AsyncStorage.removeItem(this.tokenKey)
  }

  /**
   * @description log in
   * @param {Object} anonymous
   * @param {String} anonymous.username
   * @param {String} anonymous.password
   * @returns {Promise.<Result>}
   * @memberof App
   */
  async handleLogIn ({ username, password }) {
    return req.post({
      url: '/auth/login',
      data: {
        username,
        password
      }
    }).then(async (res) => {
      const { suc, msg, data: { token, id, username, nickname, role } } = res
      if (suc) {
        await this.handleSetData({ token, id, username, nickname, role })
      }
      return { suc, msg }
    })
  }

  /**
   * @description renew token
   * @returns {Promise.<Result>}
   * @memberof AuthStore
   */
  async handleRenewToken () {
    return req.post({
      url: '/auth/renew'
    }).then(async (res) => {
      const { suc, msg, data: { token, id, username, nickname, role } } = res
      if (suc) {
        await this.handleSetData({ token, id, username, nickname, role })
      } else {
        await this.handleResetData()
      }
      return { suc, msg }
    })
  }
}

export default new AuthStore()
