import { observable, action } from "mobx";
import {
  login,
  getuserdata,
  getid,
  getapi,
  getport,
  getview,
  getpower,
  getuserInfo,
  updateUserInfo
} from "../../service/index";
import { setToken, removeToken } from "../../utils/index";
let account = {};
if (window.localStorage.getItem("account")) {
  account = JSON.parse(window.localStorage.getItem("account") + "");
}
class User {
  @observable isLogin: boolean = false;
  @observable account: any = account;
  @observable userInfo: any = {};
  @observable avatar: string = "";
  @observable viewAuthority: object[] = [];
  @action async login(form: any): Promise<any> {
    let result: any = await login(form);
    // console.log(result.code)
    if (result.code === 1) {
      if (form.remember) {
        window.localStorage.setItem("account", JSON.stringify(form));
      } else {
        window.localStorage.removeItem("account");
      }
      if (form.autoLogin) {
        setToken(result.token);
      }
    }
    return result;
  }
  @action async getuserdata(): Promise<any> {
    let result: any = await getuserdata();
    console.log("result...", result);
    return result;
  }
  @action async getid(): Promise<any> {
    let result: any = await getid();
    return result;
  }
  @action async getapi(): Promise<any> {
    let result: any = await getapi();
    return result;
  }
  @action async getport(): Promise<any> {
    let result: any = await getport();
    return result;
  }
  @action async getview(): Promise<any> {
    let result: any = await getview();
    this.viewAuthority = result.viewAuthority;
    return result;
  }
  @action async getpower(): Promise<any> {
    let result: any = await getpower();
    return result;
  }
  @action async getuserInfo(): Promise<any> {
    let result: any = await getuserInfo();
    this.userInfo = result.data;
    this.avatar = result.data.avatar;
    this.getview();
  }
  @action async logout(): Promise<any> {
    removeToken();
  }
  @action async updateUserInfo(data: object): Promise<object> {
    let result: any = await updateUserInfo(data);
    await this.getuserInfo();//更新用户信息之后改变仓库里的avatar
    return result;
  }
  @action changeAvatar(avatar: string): void {
    this.avatar = avatar;
  }
}

export default User;
