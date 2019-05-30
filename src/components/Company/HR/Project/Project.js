import React, { Component } from "react";
import {
  Drawer,
  Button,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  Select,
  Icon
} from "antd";
import "antd/dist/antd.css";
import Projectview from "./Projectview";

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Project extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          <Icon type="plus" /> Add Project
        </Button>

        <Projectview />

        <Drawer
          title="ADD PROJECT INFO"
          width={"60%"}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Form>
            <Row>
              <Col span={11}>
                <Form.Item label="Project ID :">
                  <Input
                    type="text"
                    placeholder="Project ID"
                    name="project_id"
                  />
                </Form.Item>
              </Col>
              <Col span={2} />
              <Col span={11}>
                <Form.Item label="Project Name :">
                  <Input
                    type="text"
                    placeholder="Project Name"
                    name="project_name"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item label="Start Date :">
                  <DatePicker onChange={onChange} style={{ width: "99%" }} />
                </Form.Item>
              </Col>
              <Col span={2} />
              <Col span={11}>
                <Form.Item label="End Date :">
                  <DatePicker onChange={onChange} style={{ width: "99%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <Form.Item label="Total Duration:">
                  <Input type="text" placeholder="Duration" name="duration" />
                </Form.Item>
              </Col>
              <Col span={2} />
              <Col span={11}>
                <Form.Item label="Assign To :">
                  <Select labelInValue defaultValue={{ key: "Select a Role" }}>
                    <option value="">Mathan</option>
                    <option value="">Tyron</option>
                    <option value="">Hari</option>
                    <option value="">Yothi</option>
                    <option value="">Keerthi</option>
                    <option value="">Dalista</option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={13} />
              <Col span={11}>
                <Button
                  type="danger"
                  icon="close"
                  onClick={this.onClose}
                  style={{
                    marginRight: 8,
                    background: "#cc104b",
                    color: "#FFF"
                  }}
                >
                  Cancel
                </Button>
                <Button icon="plus" onClick={this.onClose} type="primary">
                  Add
                </Button>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </div>
    );
  }
}
