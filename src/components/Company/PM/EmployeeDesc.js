import React, { Component } from "react";
import { Row, Col } from "antd";

export default class EmployeeDesc extends Component {
  render() {
    return (
      <div>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Employee Id: </Col>
            <Col span={18}> Employee ID </Col>
          </Col>
          {/* <Col span={12}>col-12</Col> */}
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24} style={{ border: "0px solid" }}>
            <Col span={6} style={{ border: "0px solid" }}>
              {" "}
              Employee Name:{" "}
            </Col>
            <Col span={18}>Mahendiran Puthiyajothi</Col>
          </Col>
          {/* <Col span={12}>col-12</Col> */}
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Designation: </Col>
            <Col span={18}>Software Developer</Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Email: </Col>
            <Col span={18}>saidputhi@gmail.com</Col>
          </Col>
        </Row>
      </div>
    );
  }
}
