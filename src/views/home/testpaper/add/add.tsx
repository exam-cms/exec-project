import * as React from "react";
import Editor from "for-editor";
import { Input, Modal,message } from "antd";
import "./css/add.css";
const { confirm } = Modal;
import { Select } from "antd";
import { inject, observer } from "mobx-react";
const { Option } = Select;
interface Props {
  size: any;
  user: any;
  question: any;
  exam: any;
}

@inject("exam", "user", "question")
class Add extends React.Component<Props> {
  state = {
    examtypelist: [],
    topiclist: [],
    courselist: [],
    title: "", //标题
    questions_stem: "", //题干
    subject_id: "", //课题id
    exam_id: "", //考试类型id
    user_id: "",
    questions_type_id: "", //试题类型id
    questions_answer: "" //题目答案
  };
  public render() {
    let {
      examtypelist,
      topiclist,
      courselist,
      title,
      questions_stem,
      questions_answer
    } = this.state;
    return (
      <div className="warper">
        <h2>添加试题</h2>
        <div className="showbox">
          <li>题目信息</li>
          <li>题干</li>
          <Input
            size="large"
            placeholder="请输入题目信息,不超过20个字"
            style={{ width: "500px", margin: "10px 0 20px" }}
            value={title}
            onChange={this.changetitle}
          />
          <li>题目主题</li>
          <Editor value={questions_stem} onChange={this.changequestions_stem} />
          <li>请选择考试类型:</li>
          <Select
            defaultValue="周考一"
            style={{ width: 176, paddingBottom: 8, marginBottom: 24 }}
            onChange={(e: any) => {
              this.handleChange(e, "exam_id");
            }}
          >
            {examtypelist
              ? examtypelist.map((item: any) => (
                  <Option value={item.exam_id}>{item.exam_name}</Option>
                ))
              : ""}
          </Select>
          <li>请选择课程类型:</li>
          <Select
            defaultValue="简答题"
            style={{ width: 176, paddingBottom: 8, marginBottom: 24 }}
            onChange={(e: any) => {
              this.handleChange(e, "subject_id");
            }}
          >
            {courselist
              ? courselist.map((item: any) => (
                  <Option value={item.subject_id}>{item.subject_text}</Option>
                ))
              : ""}
          </Select>

          <li>请选择题目类型:</li>
          <Select
            defaultValue="javaScript上"
            style={{ width: 176, paddingBottom: 8, marginBottom: 24 }}
            onChange={(e: any) => this.handleChange(e, "questions_type_id")}
          >
            {topiclist
              ? topiclist.map((item: any) => (
                  <Option value={item.questions_type_id}>
                    {item.questions_type_text}
                  </Option>
                ))
              : ""}
          </Select>
          <li>答案信息</li>
          <Editor
            value={questions_answer}
            onChange={this.changequestions_answer}
          />
          <button className="subbtn" onClick={this.showConfirm}>
            提交
          </button>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let examtypelist = await this.props.exam.getexamtype();
    let topiclist = await this.props.exam.gettopic();
    let courselist = await this.props.exam.getcourse();
    let user_id = await this.props.user.getUserInfo();
    console.log(user_id, "dssdasd");
    this.setState({
      examtypelist: examtypelist.data,
      topiclist: topiclist.data,
      courselist: courselist.data,
      user_id: user_id.data.user_id
    });
  }
  //改变标题
  changetitle = (e: any) => {
    this.setState({ title: e.target.value });
  };
  //改变下拉菜单的值
  handleChange = (e: any, type: string) => {
    this.setState({ [type]: e });
  };
  //改变题干
  changequestions_stem = (value: any) => {
    this.setState({ questions_stem: value });
  };
  //改变题目答案
  changequestions_answer = (value: any) => {
    this.setState({ questions_answer: value });
  };
  showConfirm = () => {
    let _this = this;
    confirm({
      title: "你确定要添加这套试题么",
      content: "真的要添加么",
      async onOk() {
        let {
          title, //标题
          questions_stem, //题干
          subject_id, //课题id
          exam_id, //考试类型id
          user_id,
          questions_type_id, //试题类型id
          questions_answer
        } = _this.state; //题目答案}=_this.state
        let data = await _this.props.question.addQuestion({
          title, 
          questions_stem,
          subject_id,
          exam_id,
          user_id,
          questions_type_id,
          questions_answer
        });
        if(data.code===1){
          message.success(data.msg)
        }
      },
      onCancel() {}
    });
  };
}
export default Add;
