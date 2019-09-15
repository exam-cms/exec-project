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
  state = {
    visible: false,
  };

  handleMenuClick = (e:any) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag:any) => {
    this.setState({ visible: flag });
  };
  public render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1" onClick={()=>{
          console.log(1)
        }}>个人中心</Menu.Item>
        <Menu.Item key="2">我的班级</Menu.Item>
        <Menu.Item key="3">设置</Menu.Item>
        <Menu.Item key="4">退出登录</Menu.Item>
      </Menu>
    );
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

          <Dropdown
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" href="#">
          Hover me <Icon type="down" />
        </a>
      </Dropdown>
        </Menu>
      </Header>
    );
  }
}
export default Oheader;
