import * as React from 'react';
import { Table } from "antd";
import {inject,observer} from "mobx-react"
interface Props{
  user:any
}
const columns = [
    {
      title: "身份",
      dataIndex: "identity_text"
    },
    {
      title: "视图名称",
      dataIndex: "view_authority_text"
    },
    {
      title: "视图id",
      dataIndex: "view_id"
    }
  ];
@inject("user")
class Power extends React.Component<Props>{
  state={
    data:[]
  }
    public render(){
      let {data}=this.state
        return(
            <div>
              <h1>身份和视图权限关系</h1>
              <Table columns={columns} dataSource={data} size="middle" />
              </div>
        )
    }
    async componentDidMount(){
      let data=await this.props.user.getpower()
      this.setState({data:data.data})
  }
    
}
export default Power