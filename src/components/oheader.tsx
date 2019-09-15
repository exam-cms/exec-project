import * as React from 'react';
import {
  Layout,
  Dropdown,
  Menu,
  Modal,
  Form,
  Input,
  Upload,
  message,
  Icon
} from "antd";
import { observer, inject } from "mobx-react";
const { Content, Header, Sider } = Layout;
const { SubMenu } = Menu;
import "./css/oheader.css"
interface Props {
  global?: any;
  user?: any;
  form?: any;
}
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
)
@inject("user")
class Oheader extends React.Component<Props,any>{
  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleOk() {//点击ok之后
    this.props.form.validateFields(async (err: any, val: any) => { //校验
      console.log("err...", err, val);
      if (!err) {
        val.avatar = this.props.user.avatar;
        const { code, msg } = await this.props.user.updateUserInfo(val);
        if (code === 1) {
          message.success("更新用户信息成功");
          this.setState({
            visible: false
          });
        } else {
          message.error(msg);
        }
      }
    });
  }
  handleCancel() {//点击取消按钮的回调
    this.setState({
      visible: false
    });
  }

  beforeUpload(): boolean {
    return true;
    //上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传
  }

  handleChange(info: any) {//上传文件
    console.log("info....", info);
    if (info.file.status === "done") {
      // 上传成功
      this.props.user.changeAvatar(info.file.response.data[0].path);//改变数据库里的avatar
    } else if (info.file.status === "uploading") {
      // 做上传进度条
      console.log("percent....", info.file.percent);
    }
  }
  state = {
    visible: false,//对话框是否可见
    loading: false
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item onClick={() => this.setState({ visible: true })}>
          个人中心
        </Menu.Item>
        <Menu.Item>我的班级</Menu.Item>
        <span className="divider"></span>
        <Menu.Item>设置</Menu.Item>
        <Menu.Item>退出登陆</Menu.Item>
      </Menu>
    );
    const { userInfo, avatar } = this.props.user;
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: { span: 4, offset: 4 },
      wrapperCol: { span: 12 }
    };

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <Header className="header">
        <img
          className="logo"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg"
          alt=""
        />
        <Dropdown overlay={menu}>
          <div className="userInfo">
            <img src={userInfo.avatar} alt="用户头像" />
            <span>{userInfo.user_name}</span>
          </div>
        </Dropdown>
        <Modal
          title="更新用户信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form {...formItemLayout}>
            <Form.Item label="用户头像">
              {getFieldDecorator("avatar", {
                initialValue: userInfo.user_id
              })(
                <Upload
                  name="avatar"
                  // headers={{"content-type": "multipart/form-data"}}
                  listType="picture-card"
                  className="avatar-uploader"
                  action="http://123.206.55.50:11000/upload"
                  showUploadList={false}//是否展示文件列表
                  beforeUpload={this.beforeUpload}
                  onChange={this.handleChange}//上传文件
                >
                  {avatar ? (
                    <img src={avatar} alt="avatar" style={{ width: "100%" }} />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              )}
            </Form.Item>
            <Form.Item label="用户ID">
              {getFieldDecorator("user_id", {
                initialValue: userInfo.user_id
              })(<Input disabled={true} />)}
            </Form.Item>
            <Form.Item label="用户名">
              {getFieldDecorator("user_name", {
                initialValue: userInfo.user_name,
                rules: [
                  {
                    required: true,
                    message: "Please input your user name!"
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator("user_pwd", {
                rules: [
                  {
                    validator: (
                      ruler: object[],
                      value: string,
                      callback: any
                    ) => {
                      console.log("value...", value);
                      if (
                        value &&
                        /^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(
                          value
                        )
                      ) {
                        callback();
                      } else if (!value) {
                        callback();
                      } else {
                        callback("Please input valid password!");
                      }
                    }
                  }
                ]
              })(<Input />)}
            </Form.Item>
          </Form>
        </Modal>
      </Header>
    );
  }
}
export default Form.create()(Oheader);
