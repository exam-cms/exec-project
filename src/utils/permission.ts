import {getToken} from "./index"
import store from "../store/index"
import { routes } from '../router/routes'
function guard(history:any){
    beforeEach(history)//?????
    const unListen=history.listen((Location:object)=>{
        beforeEach(history)
    })
}
function beforeEach(history:any){
    if(getToken()){
        const userInfo:any=store.user.userInfo
        if(!Object.keys(userInfo).length){
            store.user.getuserInfo()
        }
    }else{
        history.replace('/login');
    }
}
export function filterView(originRoutes:object[],viewAutority:object[]):object[]{
    const forbiddenView:object[]=[]
    function func(originRoutes:object[],viewAutority:object[]):object[]{
        const routs:object[]=[]
        originRoutes.forEach(({...item}:any)=>{
            if(item.children){
                item.children=func(item.children,viewAutority)
            }
            if(item.view_id){
                if(viewAutority.findIndex((value:any)=>value.view_id===item.view_id)!==-1){
                    routes.push(item)
                }else{
                    forbiddenView.push({from:item.path,to:"/403"})
                }
            }else{
                routes.push(item)
            }
        })
        return routes
    }
    let routes=func(originRoutes,viewAutority)
    return forbiddenView.concat(routes)
}
export default guard