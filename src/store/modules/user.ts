import {observable, action} from 'mobx'
import {login,getuserdata,getid,getapi,getport,getview,getpower,getUserInfo,getViewAuthority} from '../../service/index'
import {setToken, removeToken} from '../../utils/index'
import {HttpInfo, HttpType, LoginForm} from '../../types/index'
let account = {};
if (window.localStorage.getItem("account")) {
  account = JSON.parse(window.localStorage.getItem("account") + "");
}
class User{
    @observable isLogin: boolean = false;
    @observable account: any = account;
    @observable userInfo: any = {};
    @observable viewAuthority: object[] = []; 
    @action async login(form: any): Promise<any>{
        let result: any = await login(form);
               if (result.code === 1){
            if (form.remember){
                window.localStorage.setItem('account', JSON.stringify(form));
            }else{
                window.localStorage.removeItem('account');
            }
            if (form.autoLogin){
                
                setToken(result.token);
            }
        }
        return result;
    }
    @action async getuserdata():Promise<any>{
        let result:any=await getuserdata()
        console.log('result...', result);
        return result
    }
    @action async getid():Promise<any>{
        let result:any=await getid()
        return result
    }
    @action async getapi():Promise<any>{
        let result:any=await getapi()
        return result
    }
    @action async getport():Promise<any>{
        let result:any=await getport()
        return result
    }
    @action async getview():Promise<any>{
        let result:any=await getview()
        return result
    }
    @action async getpower():Promise<any>{
        let result:any=await getpower()
        return result
    }
    @action async logout():Promise<any>{
        removeToken();
    }
    @action async getUserInfo(): Promise<any>{
        let userInfo:any = await getUserInfo();
        console.log('userInfo...', userInfo);
        this.userInfo = userInfo.data;
        this.getViewAuthority();
    }

    // 获取用户权限
    @action async getViewAuthority(): Promise<any>{
        let viewAuthority: any = await getViewAuthority();
        console.log('viewAuthority...', viewAuthority);
        this.viewAuthority = viewAuthority.data;
    }
}

export default User;
