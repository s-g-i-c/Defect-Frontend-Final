import React, { Component } from "react";

import "antd/dist/antd.css";

import {
  Form,
  Row,
  Avatar,
  Checkbox,
  Card,
  Col,
  Input,
  Button,
  Icon
} from "antd";

export default class AdvancedSearchForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    return (
      <div align="center" style={{ background: "#FFF", padding: "30px" }}>
        <Card
          title="LOGIN"
          bordered={true}
          style={{
            borderRadius: "50px 0 50px 0",
            alignItems: "center",
            background: "#F5F2F9",
            height: 500,
            width: 400
          }}
        >
          <Avatar size={120} icon="user" />
          <br />
          &nbsp;
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              <Input
                style={{ border: "1px solid #3ba2f7", borderRadius: "4px" }}
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item>
              <Input
                style={{ border: "1px solid #3ba2f7", borderRadius: "4px" }}
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <br />
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <br />
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
          {/* <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p> */}
        </Card>
      </div>
    );
  }
}
