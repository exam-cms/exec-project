import request from '../utils/request';
export let login = (params: object)=>{
    return request.post('/user/login', params);
}
export let getuserdata=()=>{
    return request.get("/user/user")//获取用户数据
}
export let getid=()=>{
    return request.get("/user/identity")//获取身份数据
}
export let getapi=()=>{
    return request.get("/user/api_authority")//获取权限接口
}
export let getport=()=>{
    return request.get("/user/identity_api_authority_relation")//身份和api接口关系
}
export let getview=()=>{
    return request.get("/user/view_authority")//视图接口权限
}
export let getpower=()=>{
    return request.get("/user/identity_view_authority_relation")//身份和视图权限关系
}
