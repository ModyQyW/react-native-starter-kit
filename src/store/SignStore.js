import { AsyncStorage } from 'react-native';
import { observer } from 'mobx-react/native';
import { observable, action, runInAction } from 'mobx';

class SignStore {
  @observable user = '123';

  @observable pwd = '123';

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
}

export default SignStore;
