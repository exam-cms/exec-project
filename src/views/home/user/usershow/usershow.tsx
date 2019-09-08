import * as React from "react";
import "./css/usershow.css";
import { NavLink } from "react-router-dom";
import RouterView from "../../../../router/routerView"
class Usershow extends React.Component {
  public render() {
    return (
      <div className="warper">
        <div className="header">
          <h2 className="tit">用户展示</h2>
        </div>
        <div className="navbox">
            <span><NavLink to="/home/usershow/userdata">用户数据</NavLink></span>
            <span><NavLink to="/home/usershow/iddata">身份数据</NavLink></span>
            <span><NavLink to="/home/usershow/api">api接口权限</NavLink></span>
            <span><NavLink to="/home/usershow/port">身份和api接口关系</NavLink></span>
            <span><NavLink to="/home/usershow/view">视图接口权限</NavLink></span>
            <span><NavLink to="/home/usershow/power">身份和视图权限关系</NavLink></span>
          </div>
        <div className="showbox">
          <RouterView {...this.props}></RouterView>
        </div>
      </div>
    );
  }
}
export default Usershow;
