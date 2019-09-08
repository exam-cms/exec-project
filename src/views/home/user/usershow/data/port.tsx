import * as React from 'react';
import { Table } from "antd";
import {inject,observer} from "mobx-react"
interface Props{
  user:any
}
const columns = [
    {
      title: "身份名称",
      dataIndex: "identity_text"
    },
    {
      title: "api权限名称",
      dataIndex: "api_authority_text"
    },
    {
      title: "api权限url",
      dataIndex: "api_authority_url"
    },{
        title: "api权限方法",
        dataIndex: "api_authority_method"
    }
  ];
@inject("user")
class Port extends React.Component<Props>{
  state={
    data:[]
  }
    public render(){
      let {data}=this.state
        return(
            <div>
              <h1>身份和api接口关系</h1>
             <Table columns={columns} dataSource={data} size="middle" />
             </div>
        )
    }
    async componentDidMount(){
      let data=await this.props.user.getport()
      this.setState({data:data.data})
      console.log(data)
  }
    
}
export default Port