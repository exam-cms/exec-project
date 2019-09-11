import { Form, Icon, Input, Button, Checkbox, message } from "antd";
import * as React from "react";
import { setToken } from "../../utils/index";
import "./index.css";
import { WrappedFormUtils } from "antd/lib/form/Form";
import { inject, observer } from "mobx-react";
interface Props {
  form: WrappedFormUtils;
  user: any;
  history: any;
}
@inject("user")
class Login extends React.Component<Props> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let { code, msg, token } = await this.props.user.login(values);
        if (code == 1) {
          setToken(token);
          this.props.history.replace("/home");
        } else {
          message.error(msg || "用户名或者密码错误");
        }
      }
    });
  };
  render() {
    console.log(this.props.user.login);
    const { getFieldDecorator } = this.props.form;
    const { user_name, user_pwd } = this.props.user.account;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("user_name", {
            validateTrigger: "onBlur",
            initialValue: user_name,
            rules: [
              { required: true, message: "Please input your username!" },
              {
                validator: (rule, value, callback) => {
                  if (/[a-z]{5,20}/.test(value)) {
                    callback();
                  } else {
                    callback("please input vaild username!");
                  }
                }
              }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("user_pwd", {
            validateTrigger: "onBlur",
            initialValue: user_pwd,
            rules: [
              {
                validator: (rule, value, callback) => {
                  if (
                    /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(
                      value
                    )
                  ) {
                    callback();
                  } else {
                    callback("please input vaild password!");
                  }
                }
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>记住密码</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(Login);
