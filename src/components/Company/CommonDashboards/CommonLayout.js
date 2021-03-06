import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Layout, Menu, Icon, Row, Col, Badge, PageHeader } from "antd";
import logo from "../../Assets/images/logo.png";
import "antd/dist/antd.css";
import "../../Assets/css/SideNav.css";
import { TotalDefectCard, FixedDefectCard } from "./Dashboard";
// import Profile from "../../User/Profile";
// import Dashboard from "./Dashboard";
import Routes from "../../User/Routes";

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SiderNav extends React.Component {
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
      <Router path="/">
        <Layout>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.toggle}
          >
            <div className="logo">
              <img src={logo} padding="10" width="65px" alt="logo" />
            </div>
            <Menu theme="dark " mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="windows" />
                <Link to={`/Dashboard`} />
                <span>Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="folder-add" />
                <span>Test</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="robot" />
                <span>Defects</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="dingding" />
                <span>Manage</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="user" />
                <span>Users</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="plus" />
                <span>Manage</span>
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
                      title="Company"
                      subTitle="Admin"
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
                          <Link to={`/Profile`} />
                          <Icon type="setting" />
                          Edit Profile
                        </Menu.Item>
                        <Menu.Item key="setting:3">
                          <Icon type="logout" />
                          Logout
                          <Link to={`/`} />
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
                minHeight: 700
              }}
            >
              {/* <Route path="/Dashboard" component={Dashboard} />
              <Route path="/Profile" component={Profile} /> */}
              <TotalDefectCard />
              <br />
              <FixedDefectCard />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default SiderNav;
