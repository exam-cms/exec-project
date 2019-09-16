import User from './modules/user';
import Question from './modules/question';
import Manage from "./modules/manage"
import Exam from "./modules/exam"
import Stayclass from './modules/stayclass'
const user = new User();
const question = new Question();
const manage=new Manage()
const exam=new Exam()
const stayclass = new Stayclass()
export default {
    user,
    question,
    manage,
    exam,
    stayclass
}