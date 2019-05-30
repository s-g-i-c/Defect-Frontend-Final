import React, { Component } from "react";
import { Form, Input, Drawer, Row, Col, Button } from "antd";

export default class AddModule extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
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
        <Button onClick={this.showModal} type="primary">
          Add Module
        </Button>

        <Drawer
          title="Add Module"
          width={"50%"}
          position={"bottom"}
          onClose={this.onClose}
          visible={this.state.visible}
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
        </Drawer>
      </div>
    );
  }
}
