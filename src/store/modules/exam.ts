<<<<<<< HEAD
import { observable, action } from "mobx";
import { getexamtype, gettopic, getcourse } from "../../service/index";
class Exam {
  @action async getexamtype(): Promise<any> {
    let result: any = await getexamtype();
    console.log("result...", result);
    return result;
  }
  @action async gettopic(): Promise<any> {
    let result: any = await gettopic();
    console.log("result...", result);
    return result;
  }
  @action async getcourse(): Promise<any> {
    let result: any = await getcourse();
    console.log("result...", result);
    return result;
  }
=======
import {observable,action} from "mobx"
import {getexamtype,gettopic,getcourse,createExam} from '../../service/index'
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
    @action async createExam(params:any):Promise<any>{
        let result:any=await createExam(params)
        return result
    }
>>>>>>> 9ced9c3694f7c301a9f73b9ccd135f767f767823
}
export default Exam;
