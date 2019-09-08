import * as React from 'react';
import { Table } from "antd";
import {inject,observer} from "mobx-react"
const columns = [
    {
      title: "身份名称",
      dataIndex: "identity_text"
    }
  ];
interface Props{
  user:any
}
@inject("user")
class Iddata extends React.Component <any>{
  state={
    data:[]
  }
    public render(){
      let {data}=this.state
        return(
            <div>
              <h1>身份数据</h1>
              <Table columns={columns} dataSource={data} size="middle" />
            </div>
        )
    }
    async componentDidMount(){
      let data=await this.props.user.getid()
      this.setState({data:data.data})
    }
    
}
export default Iddata