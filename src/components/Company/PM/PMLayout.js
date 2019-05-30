import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon, Row, Col, Badge, PageHeader } from "antd";
import logo from "../../Assets/images/logo.png";
import "../../../../node_modules/antd/dist/antd.css";
import "../../Assets/css/SideNav.css";
import Dashboard from "./Dashboard";
import Profile from "../../User/Profile";
import ManageProjects from "../PM/ManageProjects";
import Privillages from "./Privillages";
import AddModule from "./AddModule";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class PMLayout extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Router path="/m">
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.toggle}
          >
            <div className="logo">
              <img src={logo} padding="10" width="65px" alt="logo" />
              <a href="/">Defect.T</a>
            </div>
            <Menu theme="dark " mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="windows" />
                <span>Dashboard</span>
                <Link push to={`/PMLayout/Dashboard`} />
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="dingding" />
                <span>Manage Projects</span>
                <Link to="/ManageProjects" />
              </Menu.Item>
              <Menu.Item key="setting:2">
                <Icon type="setting" />

                <Link to="/privillages" />
                <span>Privillages</span>
              </Menu.Item>
              <Menu.Item key="setting">
                <Icon type="plus-square" />
                <Link to="/module" />
                <span>Manage Modules</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout
            style={{
              background: "#fff"
            }}
          >
            <Header
              style={{
                background: "#fff"
              }}
            >
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">
                    <PageHeader
                      onBack={() => null}
                      title="Project Manager"
                      subTitle="Main"
                    />
                  </div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box" />
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box" />
                </Col>
                <Col className="gutter-row" span={6}>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                  >
                    <Menu.Item key="setting:11">
                      <Badge count={0} showZero>
                        <Icon type="bell" />
                      </Badge>
                    </Menu.Item>
                    <SubMenu
                      title={
                        <span className="submenu-title-wrapper">
                          <Icon type="user" />
                          Mathan
                        </span>
                      }
                    >
                      <MenuItemGroup>
                        <Menu.Item key="setting:2">
                          <Icon type="setting" />
                          Edit Profile
                          <Link to="/Profile" />
                        </Menu.Item>
                        <Menu.Item key="setting:3">
                          <Icon type="logout" />
                          Logout
                        </Menu.Item>
                      </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item>
                      <Icon type="sync" spin />
                      Help
                    </Menu.Item>
                  </Menu>
                </Col>
              </Row>
            </Header>

            <Content
              style={{
                margin: "34px 16px",
                padding: 14,
                background: "#fff",
                minHeight: 600
              }}
            >
              <Route path="/PMLayout/Dashboard" component={Dashboard} />
              <Route path="/Manageprojects" component={ManageProjects} />
              <Route path="/profile" component={Profile} />
              <Route path="/privillages" component={Privillages} />
              <Route path="/module" component={AddModule} />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default PMLayout;
