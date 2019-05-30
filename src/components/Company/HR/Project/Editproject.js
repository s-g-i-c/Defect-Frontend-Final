import React, { Component } from "react";
import { Form, Row, Col, Input, DatePicker, Select } from "antd";

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Editproject extends Component {
  render() {
    return (
      <div>
        <Form>
          <Row>
            <Col span={11}>
              <Form.Item label="Project ID :">
                <Input type="text" placeholder="Project ID" name="project_id" />
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
      </div>
    );
  }
}
