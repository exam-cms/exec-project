import * as React from "react";
import "./css/class.css";
import { Table, Divider, Button, Input } from "antd";
import { inject } from "mobx-react";
const { Column } = Table;
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
    ]
  };
  public render() {
    const { flag, data, classNo, classrome, student } = this.state;
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
              <Table dataSource={data}>
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
                  render={(text, record: any) => (
                    <span>
                      <a>修改</a>
                      <Divider type="vertical" />
                      <a>删除</a>
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
              <Input
                placeholder="教室号"
                ref="classroom"
                value={classrome}
                name="classrome"
                onChange={this.Changes}
              />
              <p>课程名</p>
              <Input
                placeholder="课程名"
                ref="curriculum"
                value={student}
                name="student"
                onChange={this.Changes}
              />
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
  };
  public addlist = () => {
    this.addgrade({
      grade_name: this.state.classNo,
      room_id: this.state.classrome,
      subject_id: this.state.student
    });
  };
  public componentDidMount() {
    this.getlist();
  }
  //获取班级数据
  public getlist = async () => {
    const reult = await this.props["manage"].getStudent();
    this.setState({ data: reult.data });
  };
  //添加班级数据
  public addgrade = async (data: any) => {
    console.log(data);
    const reult = await this.props["manage"].addStudent(data);
    console.log(reult);
  };
  public getGradnew = async () => {
    const reult = await this.props["manage"].getGradNew();
  };
}
export default Mangement;
