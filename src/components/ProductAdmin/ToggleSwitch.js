import React, { Component } from "react";
import { Switch } from "antd";

export default class ToggleSwitch extends Component {
  state = {
    checked: false
  };
  onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  render() {
    return (
      <div>
        <Switch onChange={this.onChange} />
      </div>
    );
  }
}
