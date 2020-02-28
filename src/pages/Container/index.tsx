import * as React from "react";
import { Switch, Route } from "react-router-dom";
import PersonalCenter from "@pages/PersonalCenter";
import Dashboard from "@pages/Dashboard";
import Table from "@pages/Table";
import IconPage from "@pages/Icon";
import Auth from "@pages/Auth";

import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface IProps {
  history?: any;
  children?: any;
}
interface IState {
  collapsed?: any;
  isSaved?: any;
}

class Container extends React.Component<IProps, any> {
  public name = "personal center page";
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false,
      obj: {
        a: 1,
        b: 2
      }
    };
  }
  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  public routerWillLeave(nextLocation: any) {
    console.log("******************");
    if (this.state.isSaved) {
      console.log(this);
    }
  }

  public goto(path?: string) {
    this.props.history.push(`/${path}`);
  }
  public async componentDidMount() {
    // todo
    this.setState(
      {
        newbi: "neww",
        obj: {
          a: "xx",
          c: 0
        }
      },
      () => {
        // console.log(this.state);
      }
    );
  }

  public render() {
    return (
      <div className="Dashboard">
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="header">
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Sider
              collapsible
              collapsed={(this.state as any).collapsed}
              onCollapse={this.onCollapse}
              width={200}
              style={{ background: "#000" }}
            >
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1">
                  <Icon type="pie-chart" />
                  <span>Option 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="desktop" />
                  <span>Option 2</span>
                </Menu.Item>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>User</span>
                    </span>
                  }
                >
                  <Menu.Item
                    key="3"
                    // onClick={() => {
                    //   // this.goto("personal-center");
                    // }}
                    onClick={this.goto.bind(this, "personal-center")}
                    // onClick={this.goto}
                  >
                    Personal Center
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="team" />
                      <span>Team</span>
                    </span>
                  }
                >
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9">
                  <Icon type="file" />
                  <span>File</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                style={{
                  background: "#fff",
                  padding: 24,
                  margin: 0,
                  minHeight: 280
                }}
              >
                <Switch>
                  <Route path="/personal-center" component={PersonalCenter} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/table" component={Table} />
                  <Route path="/auth" component={Auth} />
                  <Route path="/icon" component={IconPage} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Container;
