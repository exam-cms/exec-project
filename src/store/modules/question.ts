import {observable, action} from 'mobx'
import {getQuestion,addQuestion} from '../../service/index'

class Question{
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        return result
    }
    @action async addQuestion(params:any):Promise<any>{
        let result: any = await addQuestion(params);
        return result
    }
}

export default Question;