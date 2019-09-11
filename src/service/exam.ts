<<<<<<< HEAD
import request from "../utils/request";
export let getexamtype = () => {
  return request.get("/exam/examType"); //获取考试类型
};
export let gettopic = () => {
  return request.get("/exam/getQuestionsType"); //获取题目类型
};
export let getcourse = () => {
  return request.get("/exam/subject"); //获取课程类型
};
=======
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
<<<<<<< HEAD
export let createExam=(params:object)=>{
    return request.post("/exam/exam",params)//创建试卷
}
>>>>>>> 9ced9c3694f7c301a9f73b9ccd135f767f767823
=======

export let getexam=()=>{
    return request.get("/exam/exam")//获取课程类型
}
>>>>>>> 9a74be0648b697be8f5f4fa474aa6df2f00ee724
