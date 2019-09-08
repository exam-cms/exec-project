import {observable,action} from "mobx"
import {getstudent,getClassNo,addClassNo,GradNew} from "../../service/manage"
class Manage{
    @action async getstudent(){
        let result:any =await getstudent()
        return result
    }
    @action async getStudent(params: any): Promise<any>{
        let result:any =await getClassNo(params)
        return result
    }
    @action async addStudent(params: any): Promise<any>{
        let result: any = await addClassNo(params);
        return result
    }
    @action async getGradNew(params: any): Promise<any>{
        let result: any = await GradNew(params);
        return result
    }
}
export default Manage
