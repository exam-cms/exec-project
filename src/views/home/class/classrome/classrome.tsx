import * as React from 'react';
import './css/classrome.css'
import { Table, Button,Input} from 'antd';
const { Column, } = Table; 
import { inject } from "mobx-react";
import Grid from 'antd/lib/card/Grid';
import { object } from 'prop-types';
@inject("manage")
class Mangement extends React.Component {
 state = {
   grad:'',
   room_id:'',
   room_flag:false,
    data: [
      {
        room_id: "m7104i-8q3fj-c81g2n-oqv5mo",
        room_text: "34404",
        address:"删除"
    }
      ],
      flag:true,
      delflag:true
    };
  public render() {
    const { data,flag ,grad,delflag,room_id,room_flag} = this.state;
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
              <Table dataSource={data}
                onRow={(record:any) => {
                    return {
                      onClick: () => {
                        this.setState({
                          delflag:!this.state.delflag,
                          room_id:record.room_id
                        })
                      },       // 点击行
            
                    };
                  }}>
              <Column title="教室号" dataIndex="room_text" key="room_text" />
                <Column title="操作" dataIndex="address" key="address"/>
                
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
                    <Input placeholder="教室号" value={grad} name="grad" onChange={this.Changes} />
                    <div className="addsub">

                        <button className="surebtn" onClick={this.addGrad}>确定</button>
                        <button className="cancelbtn" onClick={()=>{this.setState({delflag:true})}}>取消</button>
                    </div>
                </div>
            </div>
        </div>
          <div className={delflag?"delwraper isshowdel":"delwraper"}>
            <div className="deladdbox">
              <h3>是否确定删除？</h3>
              <div className="addsub">
                <button className="surebtn" onClick={()=>{
                
                  this.setState({delflag:!this.state.delflag,room_flag:true})
                  this.DelclassRome()
                }}>确定</button>
                <button className="cancelbtn" onClick={()=>{this.setState({delflag:true,room_flag:false})}}>取消</button>
              </div>
            </div>
          </div>
      </div>
    );
  }

  public Changes = (event: any) => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };
  public componentDidMount(){
    this.GetClassRome()
  }
  
  public addclassify=()=>{
    this.setState({flag:!this.state.flag})
  }
  public addGrad = () =>{
    this.AddclassRome({room_text:this.state.grad})
    this.GetClassRome()
    this.addclassify()
  }

  //获取教室数据
  public GetClassRome = async () => {
    const reult = await this.props["manage"].getClassRome();
    let address ="删除";
    reult.data.map((item:any)=>{
      return item.address=address
    })
    this.setState({
      data:reult.data
    })
  };
  public AddclassRome = async (data:any) => {
    const reult = await this.props["manage"].addclassRome(data);
    this.GetClassRome()
    console.log(reult)
  };
  public DelclassRome = async () => {
console.log(this.state.room_flag)
    if(this.state.room_flag){
      const reult = await this.props["manage"].delclassRome({room_id:this.state.room_id});
    }
    this.GetClassRome()
  };
  

}
export default Mangement
