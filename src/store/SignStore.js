import { AsyncStorage } from "react-native";
import { observer } from "mobx-react/native";
import { observable, action, configure } from "mobx";

class SignStore {
    
  @observable user = "123";
  @observable pwd = "123";

  @action
  async autoSignIn() {
    try {
      this.user = await AsyncStorage.getItem('user');
      this.pwd = await AsyncStorage.getItem('pwd');
      if (this.user !== null && this.pwd !== null) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log(e);
    }
  }
    
}

export default SignStore;
