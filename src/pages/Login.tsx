import * as React from 'react';
import { Button } from 'antd';

class Login extends React.Component<any, object> {
    private name = 'Login component'
    constructor(props: any) {
      super(props);
      this.login = this.login.bind(this);
    }
    public login() {
      this.props.history.push('/Dashboard')
    }
    public render() {
      return (
        <div className="Login">
          <h3>{this.name}</h3>
          <Button type="primary" onClick={this.login}>登录</Button>
        </div>
      );
    }
}
export default Login;
