import { AsyncStorage } from 'react-native';
import {
  observable, action, runInAction, computed,
} from 'mobx';
import request from '../utils/request';

class AppStore {
  @observable user = '';

  @observable pwd = '';

  @observable tokenKey = 'token';

  @observable token = '';

  @action
  async autoSignIn() {
    try {
      const user = await AsyncStorage.getItem('user');
      const pwd = await AsyncStorage.getItem('pwd');
      runInAction(() => {
        this.user = user;
        this.pwd = pwd;
      });
      if (this.user && this.pwd) {
        return true;
      }
      return false;
    } catch (e) {
      // eslint-disable-next-line
      console.log('error', e);
      return e;
    }
  }

  @computed
  get getToken() {
    return this.token;
  }

  /**
   * call when relaunch app and get token
   * 重新打开应用时调用，恢复 token
   * @returns
   * @memberof AppStore
   */
  @action
  async getTokenFromStorage() {
    try {
      const token = await AsyncStorage.getItem(this.tokenKey);
      runInAction(() => {
        this.token = token;
      });
      return {
        success: true,
      };
    } catch (e) {
      // eslint-disable-next-line
      console.log('error', e);
      return {
        success: false,
        message: e,
      };
    }
  }

  @action
  setToken(token) {
    try {
      this.token = token;
      return {
        success: true,
      };
    } catch (e) {
      // eslint-disable-next-line
      console.log('error', e);
      return {
        success: false,
        message: e,
      };
    }
  }

  async setTokenToStorage(token) {
    try {
      await AsyncStorage.setItem(this.tokenKey, token);
      return {
        success: true,
      };
    } catch (e) {
      // eslint-disable-next-line
      console.log('error', e);
      return {
        success: false,
        message: e,
      };
    }
  }

  @action
  async setTokenAll(token) {
    try {
      this.token = token;
      await AsyncStorage.setItem(this.tokenKey, token);
      return {
        success: true,
      };
    } catch (e) {
      // eslint-disable-next-line
      console.log('error', e);
      return {
        success: false,
        message: e,
      };
    }
  }

  @action
  async renewToken(token) {
    request.post('/auth/renew', null, token)
      .then(async (res) => {
        if (res.success) {
          await this.setTokenAll(token);
        }
        return res;
      })
      .catch((e) => {
        // eslint-disable-next-line
        console.log('error', e);
        return {
          success: false,
          message: e,
        };
      });
  }
}

export default AppStore;
