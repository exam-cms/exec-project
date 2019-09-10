import * as React from "react";
import Editor from "for-editor";
import { Input, Modal,Select } from "antd";
import { inject, observer } from "mobx-react";
import "./css/compile.css";

const { confirm } = Modal;
const { Option } = Select;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}
interface Props {
  size: any;
  match: any;
  location: any;
}
function showConfirm() {
  confirm({
    title: "你确定要添加这套试题么",
    content: "真的要添加么",
    onOk() {
      console.log("wodhi xaiosada");
      //这发起请求
    },
    onCancel() {}
  });
}
interface Props {
  item: any;
  exam: any;
  question: any;
  query: any;
}
@inject("question", "exam")
@observer
class Compile extends React.Component<Props> {
  state = {
    getQuestionsType: [],
    subjectList: [],
    examList: []
  };
  public render() {
    let { getQuestionsType, subjectList, examList } = this.state;
    let {
      title,
      questions_stem,
      exam_name,
      subject_text,
      questions_type_text,
      questions_answer
    } = this.props.location.state;
    return (
      <div className="warper">
        <h2>编辑试题</h2>
        <div className="showbox">
          <li>题目信息</li>
          <li>题干</li>
          <Input
            size="large"
            value={title}
            style={{ width: "500px", margin: "10px 0 20px" }}
            onChange={handleChange}
          />
          <li>题目主题</li>
          <Editor value={questions_stem} style={{ height: "auto" }} />
          <li>请选择考试类型:</li>
          <Select
            defaultValue={exam_name}
            style={{ width: 176, marginBottom: 24 }}
            onChange={handleChange}
          >
            {examList &&
              examList.map((item: any) => (
                <Option value={item.exam_id}>{item.exam_name}</Option>
              ))}
          </Select>
          <li>请选择课程类型:</li>
          <Select
            defaultValue={subject_text}
            style={{ width: 176, marginBottom: 24 }}
            onChange={handleChange}
          >
            {subjectList &&
              subjectList.map((item: any) => (
                <Option value={item.subject_id}>{item.subject_text}</Option>
              ))}
          </Select>
          <li>请选择题目类型:</li>
          <Select
            defaultValue={questions_type_text}
            style={{ width: 176, marginBottom: 24 }}
            onChange={handleChange}
          >
            {getQuestionsType &&
              getQuestionsType.map((item: any) => (
                <Option value={item.questions_type_id}>
                  {item.questions_type_text}
                </Option>
              ))}
          </Select>
          <li>答案信息</li>
          <Editor value={questions_answer} style={{ height: "auto" }} />
          <button className="subbtn" onClick={showConfirm}>
            提交
          </button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getlist();
  }
  public getlist = async () => {
    const reult = await this.props.question.getQuestion();
    let examList = await this.props.exam.getexamtype();
    let subjectList = await this.props.exam.getcourse();
    let getQuestionsType = await this.props.question.getQuestionsType();

    this.setState({
      classifydata: reult.data,
      examList: examList.data,
      subjectList: subjectList.data,
      getQuestionsType: getQuestionsType.data
    });
  };
}
export default Compile;
