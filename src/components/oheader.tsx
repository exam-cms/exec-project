import * as React from 'react';
import { Breadcrumb, Dropdown, Icon, Layout, Menu } from "antd";
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        偏好设置
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        切换账户
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        退出登录
      </a>
    </Menu.Item>
  </Menu>
);
class Oheader extends React.Component {
  public render() {
    return (
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">北京八维研修学院</Menu.Item>

          <Dropdown overlay={menu} trigger={["click"]}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="down" />
            </a>
          </Dropdown>
        </Menu>
      </Header>
    );
  }
}
export default Oheader;
