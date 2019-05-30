import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Input, DatePicker, Select } from "antd";
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

  render() {
    return (
      <div>
        <br />
        <h1>PROJECT INF0</h1>
        <br />
        <Button type="primary" onClick={this.showModal}>
          Add Project
        </Button>

        <Projectview />

        <Modal
          title="Add Project Info"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
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
          </Form>
        </Modal>
      </div>
    );
  }
}
