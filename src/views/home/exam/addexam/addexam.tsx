import * as React from "react";
import "./css/adexam.css";
import { Input, Select, InputNumber, DatePicker } from "antd";
const { Option } = Select;
import { inject, observer } from "mobx-react";
interface Props {
  exam: any;
}
@inject("exam")
class Addexam extends React.Component<Props> {
  state = {
    startValue: null,
    endValue: null,
    endOpen: false,
    exam_id: "",
    subject_id: "",
    title: "",
    examtypelist: [],
    courselist: []
  };
  public render() {
    const {
      startValue,
      endValue,
      endOpen,
      examtypelist,
      courselist,
      title
    } = this.state;
    return (
      <div className="warper">
        <div className="header">
          <h2>添加考试</h2>
        </div>
        <div className="content">
          <div className="item">
            <li>试卷名称</li>
            <Input
              style={{ width: 380 }}
              value={title}
              onChange={this.changetitle}
            />
          </div>
          <div className="item">
            <li>选择考试类型</li>
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
          </div>
          <div className="item">
            <li>选择课程</li>
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
          </div>
          <div className="item">
            <li>设置题量</li>
            <InputNumber min={1} max={10} />
          </div>
          <div className="time">
            <li>考试时间</li>
            <div className="timebox">
              <DatePicker
                // disabledDate={this.disabledStartDate}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                // value={startValue}
                placeholder="开始时间"
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
                style={{ minWidth: 128, marginRight: 10 }}
              />
              <span className="kong">-</span>
              <DatePicker
                // disabledDate={this.disabledEndDate}
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                // value={endValue}
                placeholder="结束时间"
                onChange={this.onEndChange}
                open={endOpen}
                onOpenChange={this.handleEndOpenChange}
                style={{ minWidth: 128, marginLeft: 10 }}
              />
            </div>
          </div>
          <button className="btn">创建试卷</button>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let examtypelist = await this.props.exam.getexamtype();
    let courselist = await this.props.exam.getcourse();
    this.setState({
      examtypelist: examtypelist.data,
      courselist: courselist.data
    });
  }
  handleChange = (e: any, type: string) => {
    this.setState({ [type]: e });
  };
  changetitle = (e: any) => {
    this.setState({ title: e.target.value });
  };
  // disabledStartDate = (startValue: any) => {
  //   const { endValue } = this.state;
  //   if (!startValue || !endValue) {
  //     return false;
  //   }
  //   return startValue.valueOf() > endValue.valueOf();
  // };

  // disabledEndDate = (endValue: any) => {
  //   const { startValue } = this.state;
  //   if (!endValue || !startValue) {
  //     return false;
  //   }
  //   return endValue.valueOf() <= startValue.valueOf();
  // };

  onChange = (field: any, value: any) => {
    this.setState({
      [field]: value._d*1
    },()=>{
      console.log(this.state)
    });
  };

  onStartChange = (value: any) => {
    this.onChange("startValue", value);
    console.log("onStartChange")
  };

  onEndChange = (value: any) => {
    this.onChange("endValue", value);
    console.log("onEndChange")
  };

  handleStartOpenChange = (open: any) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
    console.log("handleStartOpenChang")
  };

  handleEndOpenChange = (open: any) => {
    this.setState({ endOpen: open });
  };
}
export default Addexam;
