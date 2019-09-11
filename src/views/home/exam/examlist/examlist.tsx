import * as React from "react";
import { Table, Button } from "antd";
import "./css/examlist.css";
import { inject, observer } from "mobx-react";
const ButtonGroup = Button.Group;
const { Column, ColumnGroup } = Table;
const columns = [
  {
    title: "试卷信息",
    dataIndex: "msg",
    key: "msg"
  },
  {
    title: "班级",
    dataIndex: "class",
    key: "class"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator"
  },
  {
    title: "开始时间",
    dataIndex: "start",
    key: "start"
  },
  {
    title: "结束时间",
    dataIndex: "end",
    key: "end"
  },
  {
    title: "操作",
    dataIndex: "operation",
    key: "tags",
    width: 100,
    render: () => <a>详情</a>
  }
];
interface Props {
  exam: any;
}
@inject("exam")
@observer
class Examlist extends React.Component<Props> {
  state = {
    data: [],
    examList: [],
    subjectList: [],
    exam: "",
    subject: ""
  };
  public render() {
    let { examList, subjectList, exam, subject, data } = this.state;
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
          <select
            style={{ width: 120 }}
            value={exam}
            onChange={e => this.setState({ exam: e.target.value })}
          >
            <option value=""></option>
            {examList.map((item: any) => (
              <option value={item.exam_name} key={item.exam_id}>
                {item.exam_name}
              </option>
            ))}
          </select>
          <span>课程 : </span>
          <select
            style={{ width: 120 }}
            value={subject}
            onChange={e => this.setState({ subject: e.target.value })}
          >
            <option value=""></option>
            {subjectList.map((item: any) => (
              <option value={item.exam_name} key={item.subject_id}>
                {item.subject_text}
              </option>
            ))}
          </select>
          <Button
            type="primary"
            icon="search"
            className="btn"
            onClick={this.handleBtn}
          >
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
            <Table
              dataSource={data}
              pagination={false}
              columns={columns}
            ></Table>
          </div>
        </div>
      </div>
    );
  }

  handleBtn = async () => {
    let data = await this.props.exam.getexam();
    this.setState({ data: data.data });
  };
  async componentDidMount() {
    let examList = await this.props.exam.getexamtype();
    let subjectList = await this.props.exam.getcourse();
    this.setState({ examList: examList.data, subjectList: subjectList.data });
  }
}
export default Examlist;
