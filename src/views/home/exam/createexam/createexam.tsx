import * as React from "react";
import "./css/createexam.css";
const ReactMarkdown = require('react-markdown')
interface Props{
    match:any,
    location:any
}
class Createexam extends React.Component<Props>{
    state={
        title:"",
        questions:[]
    }
  render() {
      let {title,questions}=this.state
    return (
      <div className="warper">
        <div className="header">
          <h2>创建试题</h2>
        </div>
        <div className="content">
            <button className="addtopic">添加新题</button>
            <div className="box">
                <h2>{title}</h2>
                <p>sdsadad</p>
                {questions?questions.map((item:any,index)=>{
                    return  <div className="topicbox" key={index}>
                        <li style={{marginBottom:6}}>{index*1+1}:{item.title}<span>删除</span></li>
                        {item.questions_stem?<ReactMarkdown style={{background:"#ccc"}} source={item.questions_stem} />:""}
                    </div>
                }):""}
                <button className="createbtn">创建试卷</button>
            </div>
        </div>

      </div>
    );
  }
  componentDidMount(){
      if(this.props.location.query){
        let {title,questions}=this.props.location.query
        console.log(this.props.location.query)
        this.setState({title,questions})
      }
       
  }
}
export default Createexam;
