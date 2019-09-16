import * as React from "react";
import "./css/student.css";
import { Input, Select, Table } from "antd";
// import XLSX from "xlsx"
const { Option } = Select;
import { inject } from "mobx-react";
const columns = [
  {
    title: "姓名",
    dataIndex: "student_name"
  },
  {
    title: "学号",
    dataIndex: "student_id"
  },
  {
    title: "班级",
    dataIndex: "grade_name"
  },
  {
    title: "教室",
    dataIndex: "room_text"
  },
  {
    title: "密码",
    dataIndex: "student_pwd"
  },
  {
    title: "操作",
    key: "删除",
    width: 100,
    render: () => <a>删除</a>
  }
];
interface Props{
  manage:any
}
@inject("manage")
class Student extends React.Component <Props>{
  state = {
    data: []
  };
  public render() {
    let { data } = this.state;
    return (
      <div className="warper">
        <div className="header">
          <h2>学生管理</h2>
        </div>
        <div className="searchbox">
          <Input placeholder="输入学生姓名" className="useript" />
          <Select defaultValue="tit" className="room">
            <Option value="tit">请输入教室号</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Select defaultValue="tit" className="class">
            <Option value="tit">班级号</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <button className="searchbtn">搜索</button>
          <button className="resetbtn">重置</button>
          <button className="resetbtn" >导出</button>
          <button className="resetbtn">
            <input type="file"  />
          </button>
        </div>
        <div className="content">
          <Table columns={columns} dataSource={data} size="middle" />
        </div>
      </div>
    );
  }
//   exportExcel = ()=>{
//     // 1.把table里面的数据生成worksheet
//     let wroksheet = XLSX.utils.json_to_sheet(this.state.data);
//     // 2.把worksheet放到workbook里
//     let workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, wroksheet);
//     XLSX.utils.book_append_sheet(workbook, wroksheet);
//     XLSX.utils.book_append_sheet(workbook, wroksheet);
//     XLSX.utils.book_append_sheet(workbook, wroksheet);
//     XLSX.utils.book_append_sheet(workbook, wroksheet);
//     XLSX.writeFile(workbook, '学生名单.xlsx');
// }

// uploadExcel = (e:any)=>{
//     let reader = new FileReader();
//     reader.onload = function(e: any){
//         var data = new Uint8Array(e.target.result);
//         var workbook = XLSX.read(data, {type: 'array'});
//         var ws = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
//     }

//     reader.readAsArrayBuffer(e.target.files[0]);
// }
  async componentDidMount() {
      let data=await this.props['manage'].getstudent()
      console.log(data)
      this.setState({data:data.data})
  }
}
export default Student;
