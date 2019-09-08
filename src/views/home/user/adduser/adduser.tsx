import * as React from "react";
import { Tag, Button, Input,  } from "antd";

import "./css/adduser.css"
class Adduser extends React.Component {
  public render() {
    return (
      <div className="add-wrap">
        <h2 className="title">添加用户</h2>
        <div className="add">
          <div className="addUser">
            <Button>添加用户</Button>
            <Button>更新用户</Button>
            <div>
              <Input placeholder="请输入用户名" maxLength={25} />
            </div>
            <div>
              <Input placeholder="请输入密码" maxLength={25} />
            </div>
            <div>
              <select defaultValue="请选择身份证ID" style={{ width: 120 }}>
                <option value="管理员">管理员</option>
                <option value="出题者">出题者</option>
                <option value="浏览者">浏览者</option>
              </select>
            </div>
            <div>
              <Button style={{ marginRight: "10px" }}>确定</Button>
              <Button style={{ marginRight: "10px" }}>重置</Button>
            </div>
          </div>
          <div className="addUser">
            <Button>添加身份</Button>
            <div>
              <Input placeholder="请输入身份名称" maxLength={25} />
            </div>
            <div>
              <Button style={{ marginRight: "10px" }}>确定</Button>
              <Button style={{ marginRight: "10px" }}>重置</Button>
            </div>
          </div>
          <div className="addUser">
            <Button>添加api接口权限</Button>
            <div>
              <Input placeholder="请输入api接口权限名称" maxLength={25} />
            </div>
            <div>
              <Input placeholder="请输入api接口权限url" maxLength={25} />
            </div>
            <div>
              <Input placeholder="请输入api接口权限方法" maxLength={25} />
            </div>
            <div>
              <Button style={{ marginRight: "10px" }}>确定</Button>
              <Button style={{ marginRight: "10px" }}>重置</Button>
            </div>
          </div>
          <div className="addUser" style={{ borderLeft: "1px solid #ccc" }}>
            <Button>添加视图接口权限</Button>
            <div>
              <select defaultValue="选择已有视图" style={{ width: 120 }}>
                <option value="管理员">登录</option>
                <option value="出题者">出题者</option>
                <option value="浏览者">浏览者</option>
              </select>
            </div>
            <div>
              <Button style={{ marginRight: "10px" }}>确定</Button>
              <Button style={{ marginRight: "10px" }}>重置</Button>
            </div>
          </div>
          <div className="addUser">
            <Button>给身份这是api接口权限</Button>
            <div>
              <select defaultValue="请选择身份证ID" style={{ width: 120 }}>
                <option value="管理员">管理员</option>
                <option value="出题者">出题者</option>
                <option value="浏览者">浏览者</option>
              </select>
            </div>
            <div>
              <select defaultValue="请选择api接口权限" style={{ width: 120 }}>
                <option value="管理员">管理员</option>
                <option value="出题者">出题者</option>
                <option value="浏览者">浏览者</option>
              </select>
            </div>

            <div>
              <Button style={{ marginRight: "10px" }}>确定</Button>
              <Button style={{ marginRight: "10px" }}>重置</Button>
            </div>
          </div>
          <div className="addUser">
            <Button>给身份这是api接口权限</Button>
            <div>
              <select defaultValue="请选择身份证ID" style={{ width: 120 }}>
                <option value="管理员">管理员</option>
                <option value="出题者">出题者</option>
                <option value="浏览者">浏览者</option>
              </select>
            </div>
            <div>
              <select defaultValue="请选择api接口权限" style={{ width: 120 }}>
                <option value="管理员">管理员</option>
                <option value="出题者">出题者</option>
                <option value="浏览者">浏览者</option>
              </select>
            </div>

            <div>
              <Button style={{ marginRight: "10px" }}>确定</Button>
              <Button style={{ marginRight: "10px" }}>重置</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Adduser;
