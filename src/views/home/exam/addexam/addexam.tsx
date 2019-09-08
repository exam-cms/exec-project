import * as React from "react";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { Input, InputNumber, DatePicker, Button } from "antd";
import "./css/adexam.css";
const { RangePicker } = DatePicker;
interface Props {
  form: WrappedFormUtils;
  user: any;
  history: any;
}
class Addexam extends React.Component<Props> {
  public render() {
    return (
      <div
        className="addExamBox"
        style={{
          width: "100%",
          height: "100%",
          background: "#f0f2f5"
        }}
      >
        <h2 style={{ padding: "20px 0px", marginTop: "10px" }}> 添加考试</h2>
        <div className='content'>
          <div className="add-inp">
            <p>试卷名称</p>
            <Input />
          </div>
          <div className="add-inp">
            <p>选择考试类型</p>
            <div>
              <select style={{ width: 120 }}>
                <option value="Javaspcrit上">周考一</option>
                <option value="Javaspcrit下">周考二</option>
                <option value="模块开发">周考三</option>
                <option value="移动开发">月考</option>
              </select>
            </div>
          </div>
          <div className="add-inp">
            <p>选择课程类型</p>
            <div>
              <select style={{ width: 120 }}>
                <option value="Javaspcrit上">Javaspcrit上</option>
                <option value="Javaspcrit下">Javaspcrit下</option>
                <option value="模块开发">模块开发</option>
                <option value="移动开发">移动开发</option>
                <option value="node开发">node开发</option>
                <option value="组件化开发">组件化开发</option>
                <option value="渐进式开发">渐进式开发</option>
                <option value="项目实战">项目实战</option>
              </select>
            </div>
          </div>
          <div className="add-inp">
            <p>设置数量</p>
            <InputNumber />
          </div>
          <div className="add-inp">
            <p>考试时间</p>
            <RangePicker />
          </div>
          <div className="add-inp">
            <Button type="primary">创建试卷</Button>
          </div>
        </div>
      </div>
    );
  }
}
export default Addexam;
