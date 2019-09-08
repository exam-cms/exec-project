import request from '../utils/request';
export let getstudent=()=>{
    return request.get("/manger/student")
}
export let getClassNo=(params:object)=>{
    return request.get("/manger/grade",params)
}

export let addClassNo=(params:object)=>{
    console.log(params)
    return request.post("/manger/grade",params)
}

export let GradNew=(params:object)=>{
    return request.get("/manger/student/new",params)
}