import "antd/dist/antd.css";
import { Avatar, Divider, Col, Row, Form, Input, Icon, Button } from "antd";
import React, { Component } from "react";

class Profile extends Component {
  render() {
    const { TextArea } = Input;
    return (
      <div>
        <Row>
          <Col span={16}>
            <Col span={2} />
            <Col span={10}>
              <Row>Full Name</Row>
              <Row>
                <Form.Item>
                  <Input
                    type="text"
                    value="Mathan"
                    placeholder=" Enter Username !"
                  />
                </Form.Item>
              </Row>
              <Row>Current Password</Row>
              <Row>
                <Form.Item>
                  <Input
                    type="password"
                    value="55645484"
                    placeholder=" Enter current Password !"
                  />
                </Form.Item>
              </Row>
              <Row>Password</Row>
              <Row>
                <Form.Item>
                  <Input type="password" placeholder=" Enter New Password !" />
                </Form.Item>
              </Row>
              <Row>Confirm Password</Row>
              <Row>
                <Form.Item>
                  <Input
                    type="password"
                    placeholder=" Enter Confirm Password !"
                  />
                </Form.Item>
              </Row>
              <Row>Bio</Row>
              <Row>
                <Form.Item>
                  <TextArea rows="1.5" />
                </Form.Item>
              </Row>

              <Row>
                <Button
                  icon="check"
                  type="primary"
                  style={{
                    size: "50%",
                    borderRadius: "15px 0 15px 0"
                  }}
                >
                  Update Changes
                </Button>
                &nbsp;
                <Button
                  type="danger"
                  icon="close"
                  onClick={this.onClose}
                  style={{
                    size: "50%",
                    borderRadius: "15px 0 15px 0",
                    background: "#cc104b",
                    color: "#FFF"
                  }}
                >
                  Cancel Changes
                </Button>
              </Row>
            </Col>
          </Col>
          <Col span={7}>
            <Divider>Update </Divider>
            <Avatar
              style={{
                margin: "16px 0 0  85px",
                background: "linear-gradient(to right, #7474bf, #348ac7)"
              }}
              size={164}
              icon="user"
            />

            <Row>
              <br />
              <Button style={{ margin: "16px 0 0  85px" }}>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Row>
            <Divider />
          </Col>
          <Col span={1} />
        </Row>
      </div>
    );
  }
}

export default Profile;
