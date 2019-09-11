import * as React from "react";
import "./css/adexam.css";
import { Input, Select, InputNumber, DatePicker } from "antd";
const { Option } = Select;
import { inject, observer } from "mobx-react";
interface Props {
  exam: any;
  history:any
}
@inject("exam")
@observer
class Addexam extends React.Component<Props> {
  state = {
    start_time: null,
    end_time: null,
    endOpen: false,
    exam_id: "",
    subject_id: "",
    title: "",
    number:"",

    examtypelist: [],
    courselist: []
  };
  public render() {
    const {
      start_time,
      end_time,
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
            <InputNumber min={3} max={10} onChange={this.changenumber}/>
          </div>
          <div className="time">
            <li>考试时间</li>
            <div className="timebox">
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="开始时间"
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
                style={{ minWidth: 128, marginRight: 10 }}
              />
              <span className="kong">-</span>
              <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="结束时间"
                onChange={this.onEndChange}
                open={endOpen}
                onOpenChange={this.handleEndOpenChange}
                style={{ minWidth: 128, marginLeft: 10 }}
              />
            </div>
          </div>
          <button className="btn" onClick={this.create}>创建试卷</button>
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
  onChange = (field: any, value: any) => {
    this.setState({
      [field]: value._d*1
    },()=>{
      console.log(this.state)
    });
  };
  onStartChange = (value: any) => {
    this.onChange("start_time", value)
  };

  onEndChange = (value: any) => {
    this.onChange("end_time", value);
  };
  handleStartOpenChange = (open: any) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };
  handleEndOpenChange = (open: any) => {
    this.setState({ endOpen: open });
  };
  changenumber=(value:any)=>{
    this.setState({number:value})
  }
   create=async ()=>{
    let {subject_id,exam_id,title,start_time,end_time,number}=this.state
    let data=await this.props.exam.createExam({subject_id,exam_id,title,start_time,end_time,number})
    if(data.code==1){
        this.props.history.push({
          pathname:"/home/createexam",
          query:data.data
        })
    }
  }
}
export default Addexam;
