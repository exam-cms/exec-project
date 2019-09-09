import * as React from "react";
import "./css/class.css";
import { Table, Divider, Button, Input ,Select } from "antd";
import { inject } from "mobx-react";
const { Column } = Table;
const { Option, OptGroup } = Select;



@inject("manage")
class Mangement extends React.Component {
  state = {
    flag: true,
    classNo: "",
    classrome: "",
    student: "",
    data: [
      {
        grade_id: "1",
        grade_name: "1609B",
        room_text: "1609B",
        subject_text: "New York No. 1",
        tags: ["nice", "developer"]
      }
    ],
    subject:[],
    room:[]
  };

  public render() {
    const { flag, data, classNo, classrome, student,room , subject } = this.state;
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
              <Table dataSource={data}  
               onRow={(record:any) => {
                    return {
                      onClick: () => {
                        console.log(record)
                        // this.delGrad({room_id:record.room_id})
                      }   
                    };
                  }}
                  >
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
                  render={(text:any, record: any) => (
                    <span>
                      <a>修改</a>
                      <Divider type="vertical" />
                      <a >删除</a>
                    </span>
                  )}
                
                />
              </Table>
            </div>
          </div>
        </div>
        <div className={flag ? "wraper isshow" : "wraper"}>
          <div className="addbox">
            <div className="addbody">
              <h3>班级添加</h3>
              <span
                onClick={() => {
                  this.setState({ flag: true });
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
              <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
                <OptGroup label="Manager">
                  {/* {
                    subject && subject.map((item:any)=>{
                      return <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}</Option>
                    })
                  } */}
                </OptGroup>
              </Select>
              <p>课程名</p>
              <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
                <OptGroup label="Manager">
                  {/* {
                    room && room.map((item:any)=>{
                      return <Option key={item.room_id} value={item.room_text}>{item.room_text}</Option>
                    })
                  } */}
                 
                </OptGroup>
              </Select>
              <div className="addsub">
                <button className="surebtn" onClick={this.addlist}>
                  确定
                </button>
                <button
                  className="cancelbtn"
                  onClick={() => {
                    this.setState({ flag: true });
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  public Changes = (event: any) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  public addclassify = () => {
    this.setState({ flag: !this.state.flag });
  }
  //删除班级
  public remove(){
    console.log(this)
  }
  
  public handleChange=(value:any)=> {
    console.log(`selected ${value}`,"22222222222222222222222222222222");
  }
  //添加班级
  public addlist = () => {
    this.addgrade({
      grade_name: this.state.classNo,
      room_id: this.state.classrome,
      subject_id: this.state.student
    });
      this.getlist();
  };
  public componentDidMount() {
    this.getlist();
    this.getSubject()
    this.getRoom()
  }

  //获取班级数据
  public getlist = async () => {
    const reult = await this.props["manage"].getStudent();
    console.log(reult)
    this.setState({ data: reult.data });
  };
  //添加班级数据

  public addgrade = async (data: any) => {
    const reult = await this.props["manage"].addStudent(data);
    this.setState({ flag: !this.state.flag });
   
    this.upDate({grade_id:reult.grade_id})
  };

  //添加班级数据
  public getGradnew = async () => {
    const reult = await this.props["manage"].getGradNew();
  };


  public upDate = async (id:any) => {
    console.log(id)
    const reult = await this.props["manage"].updateClass(id);
  };
  public newClass = async () => {
    const reult = await this.props["manage"].NewClass();
    console.log(reult)
  };

  public getSubject = async () => {
    const reult = await this.props["manage"].GetSubject();
    console.log(reult)
    this.setState({
      subject:reult.data
    })
  };

  public getRoom = async () => {
    const reult = await this.props["manage"].GetRoom();
    console.log(reult)
    this.setState({
      room:reult.data
    })
  };
 
}
export default Mangement;
