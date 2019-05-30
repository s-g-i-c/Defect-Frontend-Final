import React, { Component } from "react";
import { Row, Col } from "antd";

export default class AddDefectForm extends Component {
  render() {
    return (
      <div>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Defect ID: </Col>
            <Col span={18}> Defect ID </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Module Name: </Col>
            <Col span={18}> ModuleName </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Severity: </Col>
            <Col span={18}> High </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Priority: </Col>
            <Col span={18}> High </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Defect Type: </Col>
            <Col span={18}> Functionality </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Status: </Col>
            <Col span={18}> Open </Col>
          </Col>
        </Row>

        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24} style={{ border: "0px solid" }}>
            <Col span={6} style={{ border: "0px solid" }}>
              {" "}
              Description:{" "}
            </Col>
            <Col span={18}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Detailed Description: </Col>
            <Col span={18}>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              voluptatibus accusantium necessitatibus culpa exercitationem autem
              excepturi incidunt eveniet officiis eos, eius facere, nostrum
              voluptates, fuga earum aliquam esse blanditiis quae?{" "}
            </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Defect Added By: </Col>
            <Col span={18}>Added By</Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Added Date: </Col>
            <Col span={18}>Added Date</Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        />
      </div>
    );
  }
}
