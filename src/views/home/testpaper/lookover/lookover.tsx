import * as React from "react";
import { inject, observer } from "mobx-react";
import { Tag, Button } from "antd";
import { NavLink } from "react-router-dom";
import "./css/lookover.css"
@inject("question")
@observer
class Lookover extends React.Component {
  state = {
    classifydata: []
  };
  public render() {
    const { classifydata } = this.state;
    console.log(classifydata);
    return (
      <div className="content-wrap">
        <div>
          <h2 className="title">查看试题</h2>
          <div className="classify">
            <div className="classify-con">
              <div className="classifyTitle">课程类型</div>
              <ul className="list">
                <li>All</li>
                <li>javaScript上</li>
                <li>javaScript上下</li>
                <li>模块开发</li>
                <li>移动端开发</li>
                <li>node基础</li>
                <li>组件开发(vue)</li>
                <li>渐进式开发(react)</li>
                <li>项目实战</li>
                <li>javaScript高级</li>
                <li>node高级</li>
              </ul>
            </div>
            <div className="exam">
              <div>
                考试类型 : <input type="text" />
              </div>
              <div>
                题目类型 : <input type="text" />
              </div>
              <Button type="primary" icon="search" className="btn">
                查询
              </Button>
            </div>
          </div>
        </div>

        <div className="content-con">
          {classifydata &&
            classifydata.map((item: any, ind) => (
              <div className="content-con-item" key={ind}>
                <p>{item.title}</p>
                <Tag
                  style={{
                    background: "#E6F7FF",
                    color: "#8390FF",
                    border: "1px solid #8390FF"
                  }}
                >
                  {item.questions_type_text}
                </Tag>
                <Tag
                  style={{
                    background: "#F0F5FF",
                    color: "#2F54EB",
                    border: "1px solid #2F54EB"
                  }}
                >
                  {item.subject_text}
                </Tag>
                <Tag
                  style={{
                    background: "#FFF7E6",
                    color: "#FA8C16",
                    border: "1px solid #FA8C16"
                  }}
                >
                  {item.exam_name}
                </Tag>
                <div className="release" color="blue">
                  {item.user_name}发布
                </div>
                <NavLink to="" className="target">
                  编辑
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getlist();
  }
  public getlist = async () => {
    const reult = await this.props["question"].getQuestion();
    this.setState({ classifydata: reult.data });
  };
}
export default Lookover;
