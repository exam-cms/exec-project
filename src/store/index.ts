import User from './modules/user';
import Question from './modules/question';
import Manage from "./modules/manage"
import Exam from "./modules/exam"
const user = new User();
const question = new Question();
const manage=new Manage()
const exam=new Exam()
export default {
    user,
    question,
    manage,
    exam
}