import request from '../utils/request';
export let getQuestion = (params: object)=>{
    return request.get('/exam/questions/condition', {params});
}
export let addQuestion=(params:object)=>{
    return request.post("/exam/questions",params)
}


export let getQuestionsType=(params:object)=>{
    return request.get("/exam/getQuestionsType",params)
}


export let getQuestionsCondition=(params:object)=>{
    return request.get("/exam/questions/condition",{params})
}
