import * as React from 'react';
import { Button } from 'antd';
import { Input, Tooltip, Icon } from 'antd';

class Login extends React.Component<any, object> {
  // private name = 'Login component'
  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
  }
  public login() {
    this.props.history.push('/Dashboard')
  }
  public render() {
    return (
      <div className="zx-login">
        <h3>系统登录</h3>
        <Input className="zx-login-input"
          placeholder="请输入账号"
          size="large"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={
            <Tooltip title="账号密码随便填">
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            </Tooltip>
          }
        />
        <Input.Password placeholder="请输入密码" 
        className="zx-login-input"
        size="large"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        />
        <Button className="zx-login-button" type="primary" onClick={this.login}>登录</Button>
      </div>
    );
  }
}
export default Login;
