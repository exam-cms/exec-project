import {observable,action} from "mobx"
import {getexamtype,gettopic,getcourse,getexam} from '../../service/index'
class Exam{
    @action async getexamtype():Promise<any>{
        let result:any=await getexamtype()
        return result
    }
    @action async gettopic():Promise<any>{
        let result:any=await gettopic()
        return result
    }
    @action async getcourse():Promise<any>{
        let result:any=await getcourse()
        return result
    }
    @action async getexam():Promise<any>{
        let result:any=await getexam()
        console.log('result...', result);
        return result
    }

}
export default Exam;
