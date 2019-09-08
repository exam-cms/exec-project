import {observable,action} from "mobx"
import {getexamtype,gettopic,getcourse} from '../../service/index'
class Exam{
    @action async getexamtype():Promise<any>{
        let result:any=await getexamtype()
        console.log('result...', result);
        return result
    }
    @action async gettopic():Promise<any>{
        let result:any=await gettopic()
        console.log('result...', result);
        return result
    }
    @action async getcourse():Promise<any>{
        let result:any=await getcourse()
        console.log('result...', result);
        return result
    }
}
export default Exam;