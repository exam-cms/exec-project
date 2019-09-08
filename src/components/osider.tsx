import * as React from "react";
import {Icon, Layout, Menu } from "antd";
const { Sider } = Layout;
import { NavLink } from "react-router-dom";
const { SubMenu } = Menu;
class Osider extends React.Component {
  public render() {
    return (
      <Sider width={200}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="sliders" />
                试题管理
              </span>
            }
          >
            <Menu.Item key="1">
              <NavLink to="/home/add">添加试题</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/home/classify">试题分类</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/home/lookover">查看试题</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                用户管理
              </span>
            }
          >
            <Menu.Item key="5">
              <NavLink to="/home/adduser">添加用户</NavLink>
            </Menu.Item>
            <Menu.Item key="6">
              <NavLink to="/home/usershow">展示用户</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="schedule" />
                考试管理
              </span>
            }
          >
            <Menu.Item key="7">
              {" "}
              <NavLink to="/home/addexam">添加考试</NavLink>
            </Menu.Item>
            <Menu.Item key="8">
              {" "}
              <NavLink to="/home/examlist">试卷列表</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="project" />
                班级管理
              </span>
            }
          >
            <Menu.Item key="9">
              <NavLink to="/home/class">班级管理</NavLink>
            </Menu.Item>
            <Menu.Item key="10">
              <NavLink to="/home/classrome">教室管理</NavLink>
            </Menu.Item>
            <Menu.Item key="11">
              <NavLink to="/home/student">学生管理</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="project" />
                阅卷管理
              </span>
            }
          >
            <Menu.Item key="12"> <NavLink to="/home/stayclass">待批班级</NavLink></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default Osider;
