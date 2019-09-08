import * as React from "react";
import { Button } from "antd";
import { Table, Divider, Tag } from "antd";
import "./css/examlist.css";
const ButtonGroup = Button.Group;
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    firstName: "试卷信息",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    firstName: "Jim",
    lastName: "Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    firstName: "Joe",
    lastName: "Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];
class Examlist extends React.Component {
  public render() {
    return (
      <div
        className="examlistBox"
        style={{
          width: "100%",
          height: "100%",
          background: "#f0f2f5"
        }}
      >
        <h2 style={{ padding: "20px 0px", marginTop: "10px" }}> 试卷列表</h2>
        <div
          style={{
            background: "rgb(255, 255, 255)",
            padding: "24px",
            margin: " 0px 0px 20px",
            borderRadius: "10px",
            position: "relative"
          }}
        >
          <span>考试类型 :</span>
          <select style={{ width: 120 }}>
            <option value="Javaspcrit上">周考一</option>
            <option value="Javaspcrit下">周考二</option>
            <option value="模块开发">周考三</option>
            <option value="移动开发">月考</option>
          </select>
          <span>课程 : </span>
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
          <Button type="primary" icon="search" className="btn">
            查询
          </Button>
        </div>
        <div
          style={{
            background: "rgb(255, 255, 255)",
            padding: "24px",
            margin: "0px 0px 20px",
            borderRadius: "10px"
          }}
        >
          <div className="title">
            <span>试卷列表</span>
            <ButtonGroup>
              <Button>全部</Button>
              <Button>进行中</Button>
              <Button>已结束</Button>
            </ButtonGroup>
          </div>
          <div>
            <Table dataSource={data}>
              <Column title="试卷信息" dataIndex="msg" key="msg" />
              <Column title="班级" dataIndex="class" key="class" />
              <Column title="创建人" dataIndex="creator" key="creator" />
              <Column  title="开始时间" dataIndex="start" key="start" />
              <Column  title="结束时间" dataIndex="end" key="end" />
              <Column  title="操作" dataIndex="operation" key="tags" />
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default Examlist;
