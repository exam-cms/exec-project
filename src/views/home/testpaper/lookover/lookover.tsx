import * as React from "react";
import { inject, observer } from "mobx-react";
import { Tag, Button,List, Typography } from "antd";
import { NavLink } from "react-router-dom";
import "./css/lookover.css";

interface Props {
  exam: any;
  question: any;
  query:any,
}

@inject("question", "exam")
@observer
class Lookover extends React.Component<Props> {
  state = {
    classifydata: [],
    examList: [],
    subjectList: [],
    getQuestionsType: [],
    exam_id: "",
    question_id: "",
    subject_id: "",
    ind: -1,
    data:[]
  };

  public render() {
    const {
      classifydata,
      exam_id,
      subject_id,
      question_id,
      examList,
      subjectList,
      getQuestionsType,
      ind,
      data
    } = this.state;
    return (
      <div className="content-wrap">
        <div>
          <h2 className="title">查看试题</h2>
          <div className="classify">
            <div className="classify-con">
              <div className="classifyTitle">课程类型</div>
              <ul className="list">
                <li>all</li>
                {subjectList &&
                  subjectList.map((item: any, index) => (
                    <li
                      className={index === ind ? "hot" : ""}
                      key={item.subject_id}
                      onClick={() =>
                        this.setState({
                          subject_id: item.subject_id,
                          ind: index
                        })
                      }
                    >
                      {" "}
                      {item.subject_text}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="exam">
              <div>
                考试类型 :{" "}
                <select
                  style={{ width: 120 }}
                  value={exam_id}
                  onChange={e => this.setState({ exam_id: e.target.value })}
                >
                  <option value=""></option>
                  {examList&&examList.map((item: any) => (
                    <option value={item.exam_id} key={item.exam_id}>
                      {item.exam_name}
                    </option>
                  ))}
                </select>
                
              </div>
              <div>
                题目类型 :
                <select
                  style={{ width: 120 }}
                  value={question_id}
                  onChange={e => this.setState({ question_id: e.target.value })}
                >
                  <option value=""></option>
                  {getQuestionsType &&
                    getQuestionsType.map((item: any) => (
                      <option
                        value={item.questions_type_id}
                        key={item.questions_type_id}
                      >
                        {item.questions_type_text}
                      </option>
                    ))}
                </select>
              </div>
              <Button
                type="primary"
                icon="search"
                className="btn"
                onClick={this.handleBtn}
              >
                查询
              </Button>
            </div>
          </div>
        </div>

        <div className="content-con">
          {classifydata ?classifydata.map((item: any, ind) => (
              <div className="content-con-item" key={ind}>
                <p style={{ fontSize: "14px" }}>{item.title}</p>
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
                <div className="release" style={{ color: "blue" }}>
                  {item.user_name}发布
                </div>
                <NavLink
                  to={{pathname:"/home/compile",state:item}}
                  className="target"
                >
                  编辑
                </NavLink>
              </div>
            )):<div style={{textAlign:"center"}}>
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgMzEuNjcpIj4KICAgICAgPGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbD0iI0Y1RjVGNyIgY3g9IjY3Ljc5NyIgY3k9IjEwNi44OSIgcng9IjY3Ljc5NyIgcnk9IjEyLjY2OCIvPgogICAgICA8cGF0aCBkPSJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0eiIgZmlsbD0iI0FFQjhDMiIvPgogICAgICA8cGF0aCBkPSJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy41NikiLz4KICAgICAgPHBhdGggZD0iTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWxsPSIjRjVGNUY3Ii8+CiAgICAgIDxwYXRoIGQ9Ik00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5eiIgZmlsbD0iI0RDRTBFNiIvPgogICAgPC9nPgogICAgPHBhdGggZD0iTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnoiIGZpbGw9IiNEQ0UwRTYiLz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OS42NSAxNS4zODMpIiBmaWxsPSIjRkZGIj4KICAgICAgPGVsbGlwc2UgY3g9IjIwLjY1NCIgY3k9IjMuMTY3IiByeD0iMi44NDkiIHJ5PSIyLjgxNSIvPgogICAgICA8cGF0aCBkPSJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" alt=""/>
            </div>}
            
      )}
    />
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getlist();
  }
  public getlist = async () => {
    const reult = await this.props.question.getQuestion();
    let examList = await this.props.exam.getexamtype();
    let subjectList = await this.props.exam.getcourse();
    let getQuestionsType = await this.props.question.getQuestionsType();
    this.setState({
      classifydata: reult.data,
      examList: examList.data,
      subjectList: subjectList.data,
      getQuestionsType: getQuestionsType.data,
      data:reult.data
    });
  };

  handleBtn = async () => {
    let {
      exam_id,
      subject_id,
      question_id
    } = this.state;
    let param: any = {};
    exam_id ? (param.exam_id = exam_id) : null;
    subject_id ? (param.subject_id = subject_id) : null;
    question_id ? (param.questions_type_id = question_id) : null;
    if (param) {
      let getQuestionsCondition = await this.props.question.getQuestionsCondition(param);
      this.setState({ classifydata: getQuestionsCondition.data });
    }
  };
}
export default Lookover;

