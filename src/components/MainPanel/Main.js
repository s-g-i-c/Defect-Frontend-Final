import React, { Component } from "react";
import { Avatar, Card, Row, Col } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductAdminLayout from "../ProductAdmin/ProductAdminLayout";
import CompanyAdminLayout from "../Company/CompanyAdmin/CompanyLayout";
import PMLayout from "../Company/PM/PMLayout";
class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Row>
            <Switch>
              <Route
                path="/ProductAdminLayout/Dashboard"
                exact
                component={ProductAdminLayout}
              />
              <Route
                path="/CompanyAdminLayout/Dashboard"
                exact
                component={CompanyAdminLayout}
              />
              <Route path="/PMLayout/Dashboard" exact component={PMLayout} />
              <Col span={24}>
                <Card
                  align="center"
                  title="SELECT FOR LOGIN "
                  bold={true}
                  bordered={true}
                  style={{
                    padding: "10%",
                    width: "100%",
                    border: "1px solod #4A569D",
                    borderRadius: "50px 0 50px 0",
                    color: "#ffb88c"
                  }}
                >
                  <Row>
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        icon="user"
                        style={{
                          background:
                            "linear-gradient(to right, #de6262, #ffb88c)",
                          borderRadius: "50px 0 50px 0"
                        }}
                      >
                        {" "}
                      </Avatar>

                      <Link push to={`/ProductAdminLayout/Dashboard`}>
                        <h3>ProductAdmin</h3>
                      </Link>
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #4b6cb7, #182848)",
                          borderRadius: "50px 0 50px 0"
                        }}
                        icon="user"
                      />
                      <Link push to={`/ProductAdminLayout/Dashboard`}>
                        <h3>QA</h3>
                      </Link>
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #5f2c82, #49a09d)",
                          borderRadius: "50px 0 50px 0"
                        }}
                        icon="user"
                      />
                      <Link push to={`/CompanyAdminLayout/Dashboard`}>
                        <h3>CompanyAdmin</h3>
                      </Link>
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #DC2424, #4A569D)",
                          borderRadius: "50px 0 50px 0"
                        }}
                        icon="user"
                      />
                      <Link push to={`/ProductAdminLayout/Dashboard`}>
                        <h3>ProductAdmin</h3>
                      </Link>
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #4b6cb7, #182848)",
                          borderRadius: "50px 0 50px 0"
                        }}
                        icon="user"
                      />
                      <Link push to={`/PMLayout/Dashboard`}>
                        <br />
                        <h3>Project Manger</h3>
                      </Link>
                    </Col>
                    &nbsp;
                    <Col span={2}>
                      <Avatar
                        shape="square"
                        size={164}
                        icon="user"
                        style={{
                          background:
                            "linear-gradient(to right, #de6262, #ffb88c)",
                          borderRadius: "50px 0 50px 0"
                        }}
                      >
                        {" "}
                      </Avatar>

                      <Link push to={`/ProductAdminLayout/Dashboard`}>
                        <h3>Developers</h3>
                      </Link>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Switch>
          </Row>
        </Router>
      </div>
    );
  }
}

export default Main;
