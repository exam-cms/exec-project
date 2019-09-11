import * as React from "react";
import "./css/class.css";
import { Table, Divider, Button, Input, Select } from "antd";
import { inject } from "mobx-react";
const { Column } = Table;
const { Option, OptGroup } = Select;

@inject("manage")
class Mangement extends React.Component {
  state = {
    flag: false,
    class:'',
    classNo: "",
    room_id: "",
    subject_id: "",
    grade_id: "",
    room_text:"",
    subject_text:"",
    data: [
      {
        grade_id: "1",
        grade_name: "1609B",
        room_text: "1609B",
        subject_text: "New York No. 1",
        tags: ["nice", "developer"]
      }
    ],
    subject: [],
    room: []
  };

  public render() {
    const { flag, data, classNo, room, subject } = this.state;
    return (
      <div className="layout1">
        <h2>班级管理</h2>
        <div className="layout-content1">
          <div className="layout-content-box">
            <div>
              <Button
                type="primary"
                className="button"
                onClick={this.addclassify}
              >
                {" "}
                添加班级
              </Button>
            </div>
            <div className="table-wrapper">
              <Table dataSource={data} pagination={false}>
                <Column
                  title="班级名"
                  dataIndex="grade_name"
                  key="grade_name"
                />
                <Column
                  title="课程名"
                  dataIndex="subject_text"
                  key="subject_text"
                />
                <Column title="教室号" dataIndex="room_text" key="room_text" />
                <Column
                  title="操作"
                  key="action"
                  render={(text: any, record: any) => (
                    <span>
                      <a 
                      onClick={this.splices.bind(this,text)}
                      >修改</a>
                      <Divider type="vertical" />
                      <a
                        onClick={this.removes.bind(this,text)}
                      >
                        删除
                      </a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </div>
        </div>
        <div className={flag ? "wraper" : "wraper isshow"}>
          <div className="addbox">
            <div className="addbody">
              <h3>班级添加</h3>
              <span
                onClick={() => {
                  this.setState({ flag: false });
                }}
              >
                X
              </span>
            </div>
            <div className="addform">
              <p>班级名</p>
              <Input
                placeholder="班级名"
                ref="ClassNo"
                value={classNo}
                name="classNo"
                onChange={this.Changes}
              />
              <p>教室号</p>
              <Select defaultValue="请选择教室号" onChange={this.handleChange1}>
                <OptGroup label="Manager">
                  {room.map((item: any) => {
                    return (
                      <Option key={item.room_id} value={item.room_id}>
                        {item.room_text}
                      </Option>
                    );
                  })}
                </OptGroup>
              </Select>
              <p>课程名</p>
              <Select defaultValue="课程名" onChange={this.handleChange}>
                <OptGroup label="Manager">
                  {subject.map((item: any) => {
                    return (
                      <Option key={item.subject_id} value={item.subject_id}>
                        {item.subject_text}
                      </Option>
                    );
                  })}
                </OptGroup>
              </Select>
              <div className="addsub">
                <button
                  className="cancelbtn"
                  onClick={()=>{
                    this.setState({
                      flag:false
                    })
                  }}
                >
                  取消
                </button>
                <button className="surebtn" onClick={this.addlist}>
                  提交
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
  //初始render渲染之前
  public componentDidMount() {
    this.getlist();
    this.getSubject();
    this.getRoom();
  }
  //获取input值
  public Changes = (event: any) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };
  //是否打开蒙成
  public addclassify = () => {
    console.log(this.state.room_id)
    let add ='add';
    this.setState({ flag: !this.state.flag,class:add});

  };


  public handleChange = (value: any,title:any) => {
    console.log(title);

    let {props} =title;
    this.setState({
      subject_id: props.value,
      subject_text: props.childrenlue
    });
    console.log(this.state.subject_id,this.state.subject_id)
  };
  public handleChange1 = (value: any,title:any) => {
    console.log(title);
    let {props} =title;
    this.setState({
      room_id:props.value,
      room_text:props.children
    });
    console.log(this.state.room_id,this.state.room_text)
  };

  //判断是添加班级还是修改班级
  public addlist = () => {
    if(this.state.class=='add'){
      this.addgrade();
      this.setState({
        flag:false
      })
      this.getlist();

    }else if(this.state.class=='del'){
     this.upDate()
     this.setState({
      flag:false
    })
     this.getlist();
    }
  };
   //修改
   public splices = (text:any)=>{
    let del ='del';
  //  let items= this.state.room.filter((item:any)=>{
  //     return item=item.room_id==text.room_id
  //   })
    console.log(text.room_id)
    this.setState({ flag: true,class:del,room_id:text.room_id});
    
   }
  //点击删除
  public removes = (text:any)=>{
    this.deleteClass(text)
   }


  //获取所有课程名
  public getSubject = async () => {
    const reult = await this.props["manage"].GetSubject();
    this.setState({
      subject: reult.data
    });
  };
  //获取所有教室号
  public getRoom = async () => {
    const reult = await this.props["manage"].GetRoom();
    this.setState({
      room: reult.data
    });
  };
  //获取班级数据
  public getlist = async () => {
    const reult = await this.props["manage"].getStudent();
    console.log(reult);
    this.setState({ data: reult.data });
  };
  //添加班级数据
  public addgrade = async () => {
    console.log(this.state.classNo,this.state.room_id,this.state.subject_id)
    const reult = await this.props["manage"].addStudent({
      grade_name: this.state.classNo,
      room_id: this.state.room_id,
      subject_id: this.state.subject_id
    });
    this.getlist();
  };
  public deleteClass = async (data: any) => {

    const reult = await this.props["manage"].DeleteClass({grade_id:data.grade_id});
    this.getlist();
  };

  public upDate = async () => {
    console.log(this.state.room_id,this.state.room_text)
    const reult = await this.props["manage"].updateClass({room_id:this.state.room_id,room_text:this.state.room_text});
    console.log(reult)
  };

  // //添加班级数据
  // public getGradnew = async () => {
  //   const reult = await this.props["manage"].getGradNew();
  // };

  
  // public newClass = async () => {
  //   const reult = await this.props["manage"].NewClass();
  //   console.log(reult)
  // };
}
export default Mangement;
