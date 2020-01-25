import Base from "@/components/Base";
import { Button } from "antd";
import { Input, Tooltip, Icon } from "antd";
import * as React from "react";

class Login extends Base {
  public name = "Login component";
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      name: this.name,
      userName: "",
      password: "",
      api: this.api
    };
    this.changeValue = this.changeValue.bind(this);
  }
  public async login() {
    try {
      const res = await this.api.user.login({
        name: "admin",
        password: this.state.password
      });
      console.log(res);
      if (res.code === 1) {
        this.props.history.push("/Dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  }
  public changeValue(key: string, event: any) {
    const temp: any = {};
    temp[key] = event.target.value;
    this.setState(temp);
  }
  public render() {
    return (
      <div className="zx-login-box">
        <div className="zx-login">
          <h3>系统登录</h3>
          <Input
            className="zx-login-input"
            placeholder="请输入账号"
            size="large"
            onChange={this.changeValue.bind(this, "userName")}
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            suffix={
              <Tooltip title="账号密码随便填">
                <Icon type="info-circle" style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <Input.Password
            placeholder="请输入密码"
            className="zx-login-input"
            size="large"
            onChange={this.changeValue.bind(this, "password")}
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
          />
          <Button
            className="zx-login-button"
            type="primary"
            onClick={this.login}
          >
            登录
          </Button>
        </div>
      </div>
    );
  }
}
export default Login;
