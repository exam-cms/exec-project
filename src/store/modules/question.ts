import {observable, action} from 'mobx'
import {getQuestion,addQuestion,getQuestionsType,getQuestionsCondition,update} from '../../service/index'

class Question{
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        return result
    }
    @action async addQuestion(params:any):Promise<any>{
        let result: any = await addQuestion(params);
        return result
    }
    @action async getQuestionsType(params:any):Promise<any>{
        let result: any = await getQuestionsType(params);
        return result
    }
    @action async getQuestionsCondition(params:any):Promise<any>{
        console.log(params,"..................")
        let result: any = await getQuestionsCondition(params);
        return result
    }
    @action async update(params:any):Promise<any>{
        let result: any = await update(params);
        return result
    }
}

export default Question;


