import * as React from "react";
import "./css/stayclass.css";
import { Table, Button, Input } from "antd";

import { inject } from "mobx-react";
const { Column } = Table;

@inject("stayclass")
class Stayclass extends React.Component {
  state = {
    data: [
      {
        grade_id: "7q4rj-q0weu-7rw9pg-dputp",
        grade_name: "asd",
        room_id: "fantrl-x3hsdf-hfryfr-ixa9fb",
        room_text: "34302",
        subject_id: "fyu3ln-azjkie",
        subject_text: "渐进式开发(react)"
      }
    ]
  };
  public render() {
    const { data } = this.state;
    return (
      <div className="layout1">
        <h2>待批班级</h2>
        <div className="layout-content1">
          <div className="layout-content-box">
            <div className="table-wrapper">
              <Table dataSource={data}>
                <Column
                  title="班级名"
                  dataIndex="grade_name"
                  key="grade_name"
                />
                <Column
                  title="课程名称"
                  dataIndex="subject_text"
                  key="subject_text"
                />
                <Column
                  title="阅卷状态"
                  dataIndex=""
                  key=""
                />
        
                <Column
                  title="成才率"
                  dataIndex="room_text"
                  key="room_text"
                />
                <Column
                  title="操作"
                  key="action"
                  render={(text: any, record: any) => (
                    <span>
                      <a
                      //   onClick={this.splices.bind(this,text)}
                      >
                        批卷
                      </a>
                    </span>
                  )}
                />
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  public componentDidMount() {
    this.getstudent();
  }
  //获取批卷数据
  public getstudent = async () => {
    const reult = await this.props["stayclass"].Getstudent();
    this.setState({
      data: reult.data
    });
  };
}
export default Stayclass;
