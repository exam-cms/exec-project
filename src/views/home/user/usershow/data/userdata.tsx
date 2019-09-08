import * as React from "react";
import { Table } from "antd";
import {inject,observer} from "mobx-react"
interface Props{
  user:any
}
const columns = [
  {
    title: '用户名',
    dataIndex: 'user_name',
  },
  {
    title: '密码',
    dataIndex: 'user_pwd',
  },
  {
    title: '身份',
    dataIndex: 'identity_text',
  },
];
@inject("user")
class Userdata extends React.Component <Props>{
  state={
    data:[]
  }
  public render() {
    let {data}=this.state
    return (
      <div>
        <h1>用户数据</h1>
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
    );
  }
 async componentDidMount(){
      let data=await this.props.user.getuserdata()
      this.setState({data:data.data})
  }
}
export default Userdata;
