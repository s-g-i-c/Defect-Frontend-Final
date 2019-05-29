import React, { Component } from "react";
import { Checkbox, Row, Card } from "antd";

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
      </div>
    );
  }
}
