import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Button, Icon, Row, Col, Modal, Select } from "antd";
import "../../../index.css";

export default class Statusconfiguration extends Component {
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
    const { Option } = Select;
    return (
      <div>
        <Modal
          title="New Configuration"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="Add New" />
        </Modal>

        <Row>
          <Col
            span={12}
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              margin: "20px 20px 20px 20px "
            }}
          >
            <Row>
              <Col span={3} id="configDiv">
                Status
              </Col>
            </Row>
            <Row style={{ marginBottom: "20px" }}>
              <Col span={4} id="font" />
              <Col span={12}>
                <Select style={{ width: "99%" }}>
                  <Option value="jack">
                    <Col span={2}>
                      <Icon type="up-circle" theme="twoTone" />
                    </Col>
                  </Option>
                  <Option value="new">New</Option>
                  <Option value="open">Open</Option>
                  <Option value="fiexd">Fiexd</Option>
                  <Option value="closed">Closed</Option>
                  <Option value="open">Reopened</Option>
                </Select>
              </Col>
              <Col span={1} />
              <Col span={6}>
                <Button onClick={this.showModal}>
                  {" "}
                  <Icon type="plus-circle" theme="twoTone" /> Add
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
