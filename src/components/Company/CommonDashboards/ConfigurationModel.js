import React, { Component } from "react";
import { Checkbox, Row } from "antd";

export default class ConfigurationModel extends Component {
  onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    return (
      <div>
        <Row>
          <Checkbox onChange={this.onChange}> Total Defects </Checkbox>
        </Row>
        <Row>
          <Checkbox onChange={this.onChange}> Fixed Defects </Checkbox>
        </Row>
        <Row>
          <Checkbox onChange={this.onChange}> Available Defects </Checkbox>
        </Row>
        <Row>
          <Checkbox onChange={this.onChange}> Overall Total Defects </Checkbox>
        </Row>
        <Row>
          <Checkbox onChange={this.onChange}> Overall Total Defects </Checkbox>
        </Row>
        <Row>
          <Checkbox onChange={this.onChange}> Overall Total Defects </Checkbox>
        </Row>
      </div>
    );
  }
}
