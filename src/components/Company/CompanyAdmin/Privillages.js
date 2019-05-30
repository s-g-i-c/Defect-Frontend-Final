import React, { Component } from "react";
import { Row, Col, Modal } from "antd";
import ToggleSwitch from "./ToggleSwitch";

export default class Privillages extends Component {
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
    function onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    return (
      <div>
        <div>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> </Col>
          <Col span={4}>Lead QA</Col>
          <Col span={4}>Lead Sof. Eng </Col>
          <Col span={4}>QA</Col>
          <Col span={4}>Sof. Eng</Col>
          <Col span={4}>Project Manager</Col>
        </Row>

        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Add Defects </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>

        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Add Module </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>

        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Dashboard Configuration </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Project Configuration </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Add Employee </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Add Employee </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Add Employee </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>
        <Row style={{ margin: "0px 0px 20px 0px" }}>
          <Col span={4}> Add Employee </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
          <Col span={4}>
            <ToggleSwitch onChange={onChange} />
          </Col>
        </Row>
      </div>
    );
  }
}
