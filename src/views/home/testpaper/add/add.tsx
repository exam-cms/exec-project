import * as React from "react";
import Editor from "for-editor";
import { Input, Cascader, Button, Icon,Modal } from "antd";
import "./css/add.css";
const { confirm } = Modal;
import { Select } from "antd";
const { Option } = Select;

function handleChange(value: any) {
  console.log(`selected ${value}`);
}
interface Props{
  size:any
}
function showConfirm() {
  confirm({
    title: '你确定要添加这套试题么',
    content: '真的要添加么',
    onOk() {
      console.log("wodhi xaiosada")
      //这发起请求
    },
    onCancel() {},
  });
}
class Add extends React.Component<Props>{
  public render() {
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
          />
          <li>题目主题</li>
          <Editor />
          <li>请选择考试类型:</li>
          <Select
            defaultValue="week1"
            style={{ width: 176, paddingBottom: 8, marginBottom: 24 }}
            onChange={handleChange}
          >
            <Option value="week1">周考一</Option>
            <Option value="week2">周考二</Option>
            <Option value="week3">周考三</Option>
            <Option value="month">月考</Option>
          </Select>

          <li>请选择课程类型:</li>
          <Select
            defaultValue="lucy"
            style={{ width: 176, paddingBottom: 8, marginBottom: 24 }}
            onChange={handleChange}
          >
            <Option value="jack">javaScript上</Option>
            <Option value="jack">Jack</Option>
            <Option value="jack">Jack</Option>
            <Option value="jack">Jack</Option>
            <Option value="jack">Jack</Option>
            <Option value="jack">Jack</Option>
            <Option value="jack">Jack</Option>
          </Select>

          <li>请选择题目类型:</li>
          <Select
            defaultValue="lucy"
            style={{ width: 176, paddingBottom: 8, marginBottom: 24 }}
            onChange={handleChange}
          >
            <Option value="jack">Jack</Option>
          </Select>
          <li>答案信息</li>
          <Editor />
          <button className="subbtn" onClick={showConfirm}>提交</button>
        </div>
      </div>
    );
  }
}
export default Add;
