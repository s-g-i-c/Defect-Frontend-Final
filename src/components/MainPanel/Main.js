import React, { Component } from "react";
import { Avatar, Card, Row, Col } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductAdminLayout from "../ProductAdmin/ProductAdminLayout";
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

              <Col span={24}>
                <Card
                  title="SELECT FOR LOGIN "
                  bordered={true}
                  style={{
                    width: "80%",
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
                          borderRadius: "100px"
                        }}
                      >
                        {" "}
                      </Avatar>

                      <Link push to={`/ProductAdminLayout/Dashboard`}>
                        ProductAdmin
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
                          borderRadius: "100px"
                        }}
                        icon="user"
                      />
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #5f2c82, #49a09d)",
                          borderRadius: "100px"
                        }}
                        icon="user"
                      />
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #DC2424, #4A569D)",
                          borderRadius: "100px"
                        }}
                        icon="user"
                      />
                    </Col>
                    &nbsp;
                    <Col span={4}>
                      <Avatar
                        shape="square"
                        size={164}
                        style={{
                          background:
                            "linear-gradient(to right, #4b6cb7, #182848)",
                          borderRadius: "100px"
                        }}
                        icon="user"
                      />
                    </Col>
                    &nbsp;
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
