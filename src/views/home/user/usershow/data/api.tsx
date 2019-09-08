import * as React from 'react';
import { Table } from "antd";
import {inject,observer} from "mobx-react"
interface Props{
  user:any
}
const columns = [
    {
      title: "api权限名称",
      dataIndex: "api_authority_text"
    },
    {
      title: "api权限url",
      dataIndex: "api_authority_url"
    },
    {
      title: "api权限方法",
      dataIndex: "api_authority_method"
    }
  ]
@inject("user")
class Api extends React.Component<Props>{
  state={
    data:[]
  }
    public render(){
      let {data}=this.state
        return(
            <div>
                <h1>用户数据</h1>
                <Table columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
    async componentDidMount(){
      let data=await this.props.user.getapi()
      this.setState({data:data.data})
  }
    
}
export default Api