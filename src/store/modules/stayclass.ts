import {observable, action} from 'mobx'
import {getstudent} from '../../service/stayclass'

class Student{
    @action async Getstudent() {
        let result: any = await getstudent();
        return result;
      }

}

export default Student;


