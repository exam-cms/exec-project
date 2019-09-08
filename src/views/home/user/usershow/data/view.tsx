import * as React from 'react';
import { Table } from "antd";
import {inject,observer} from "mobx-react"
interface Props{
  user:any
}
const columns = [
    {
      title: "视图权限名称",
      dataIndex: "view_authority_text"
    },
    {
      title: "视图id",
      dataIndex: "view_id"
    }
  ];
@inject("user")
class View extends React.Component<Props>{
  state={
    data:[]
  }
    public render(){
      let {data}=this.state
        return(
            <div>
              <h1>视图接口权限</h1>
              <Table columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
    async componentDidMount(){
      let data=await this.props.user.getview()
      this.setState({data:data.data})
  }
}
export default View