import * as React from 'react';
import './css/classrome.css'
import { Table, Button,Input} from 'antd';
const { Column, } = Table; 
class Mangement extends React.Component {
 state = {
    data: [
        {
          key: '1',
          firstName: '1609B',
          address: '删除'
        },
        {
            key: '2',
            firstName: '1609B',
            address: '删除'
          },
          {
            key: '3',
            firstName: '1609B',
            address: '删除'
          },
      ],
      flag:true
    };
  public render() {
    const { data,flag } = this.state;
    return (
      <div className="layout1">
        <h2>
          教室管理
        </h2>
        <div className="layout-content1">
          <div className="layout-content-box">
            <div>
            <Button type="primary" className="button" onClick={this.addclassify}> 添加教室</Button>
            </div>
            <div className="table-wrapper">
              <Table dataSource={data}>
              <Column title="教室号" dataIndex="firstName" key="firstName" />
                <Column title="操作" dataIndex="address" key="address" />
                
            </Table>
            </div>
          </div>
         
        </div>
        <div className={flag?"wraper isshow":"wraper"}>
            <div className="addbox">
                <div className="addbody">
                    <h3>教室管理</h3>
                    <span onClick={()=>{this.setState({flag:true})}}>X</span>
                </div>
                <div className="addform">
                    <p>教室号</p>
                    <Input placeholder="教室号" />
                    <div className="addsub">
                        <button className="surebtn">确定</button>
                        <button className="cancelbtn" onClick={()=>{this.setState({flag:true})}}>取消</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  public addclassify=()=>{
    this.setState({flag:!this.state.flag})
  }
   
    
}
export default Mangement
