import request from '../utils/request';
export let getexamtype=()=>{
    return request.get("/exam/examType")//获取考试类型
}
export let gettopic=()=>{
    return request.get("/exam/getQuestionsType")//获取题目类型
}
export let getcourse=()=>{
    return request.get("/exam/subject")//获取课程类型
}