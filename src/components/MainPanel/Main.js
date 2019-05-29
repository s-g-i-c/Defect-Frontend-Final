import React, { Component } from "react";
import { Avatar, Card, Row, Col } from "antd";

class Main extends Component {
  render() {
    return (
      <div align="center">
        <br /> <br /> <br /> <br />
        <br /> <br /> <br /> <br />
        <Row>
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
                      background: "linear-gradient(to right, #de6262, #ffb88c)",
                      borderRadius: "100px"
                    }}
                  />
                </Col>
                &nbsp;
                <Col span={4}>
                  <Avatar
                    shape="square"
                    size={164}
                    style={{
                      background: "linear-gradient(to right, #4b6cb7, #182848)",
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
                      background: "linear-gradient(to right, #5f2c82, #49a09d)",
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
                      background: "linear-gradient(to right, #DC2424, #4A569D)",
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
                      background: "linear-gradient(to right, #4b6cb7, #182848)",
                      borderRadius: "100px"
                    }}
                    icon="user"
                  />
                </Col>
                &nbsp;
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
