import React, { Component } from "react";
import { Form, Input, Modal, Row, Col } from "antd";

export default class AddModule extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>

          
        <Modal
          title="EditModal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Update"
          cancelText="cancel"
        >
          <Row>
            <Form>
              <Row>
                <Col span={24}>Module ID</Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input type="text" placeholder="Please Input" readOnly />
                </Col>
              </Row>
              <Row>&nbsp;</Row>
              <Row>
                <Col span={24}>Module Name</Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input type="text" placeholder="Please Input" />
                </Col>
              </Row>
            </Form>
          </Row>
        </Modal>
      </div>
    );
  }
}
