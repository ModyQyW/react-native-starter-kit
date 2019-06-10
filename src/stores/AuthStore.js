import { AsyncStorage } from 'react-native';
import {
  observable, action, runInAction, computed,
} from 'mobx';
import req from '../utils/request';

class AuthStore {
  @observable tokenKey = 'token';

  @observable token = '';

  @observable userInfo = null;

  @action
  resetData() {
    this.token = '';
    this.userInfo = null;
  }

  /**
   * Sign In
   * 登入
   * @param {*} { username, password }
   * @returns
   * @memberof App
   */
  signIn({ username, password }) {
    return req.post(
      '/auth/signin',
      {
        username,
        password,
      },
    ).then(async (res) => {
      runInAction(() => {
        // save necessary information
        // 保存必要信息
        this.token = res.data.token;
      });
      AsyncStorage.setItem(this.tokenKey, this.token);
      return res;
    });
  }

  /**
   * 更新登录态
   * @memberof AuthStore
   */
  renewToken = async () => {
    try {
      // check token status first
      // 首先检查 token 状态
      const res1 = await req.get('/auth/status');
      if (res1.success) {
        // if token is still active => renew token
        // 若 token 仍有效 => 更新 token
        const res2 = await req.post('/auth/renew');
        if (res2.success) {
          runInAction(() => {
            // save necessary information
            // 保存必要信息
            this.userInfo = res2.data.userInfo;
            this.token = res2.data.token;
          });
          // value should be string
          // 值应为字符串
          AsyncStorage.setItem(this.tokenKey, this.token);
        }
        // renew failed => just return response
        return res2;
      }
      // if token is outdated => just return response
      // 若 token 已失效 => 返回响应即可
      return res1;
    } catch (err) {
      // consider token is outdated
      // 认为 token 已失效
      return {
        success: false,
        message: err,
      };
    }
  }
}

export default AuthStore;
