import React, { Component } from "react";
import { Checkbox, Row, Card, Button, Col } from "antd";

export default class ConfigurationModel extends Component {
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    return (
      <div>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              {" "}
              Total Defects{" "}
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              Fixed Defects
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              Available Defects
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              Overall Total Defects
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              Overall Total Defects
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              Overall Total Defects
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: 215, background: "#7474bf" }}>
            <Checkbox onChange={this.onChange} style={{ color: "white" }}>
              Overall Total Defects
            </Checkbox>
          </Card>
        </Row>
        <Row>
          <Col style={{ textAlign: "right" }}>
            <Card bordered={false} style={{ width: "215" }}>
              <Button type="primary" style={{ size: "100%" }}>
                {" "}
                Apply{" "}
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
