import React, { Component } from "react";
import { Row, Col } from "antd";

export default class ProjectEmployeeDesc extends Component {
  render() {
    return (
      <div>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Project Id: </Col>
            <Col span={18}> Project ID </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Project Name: </Col>
            <Col span={18}> Project Name </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Project Type: </Col>
            <Col span={18}> Project Type </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Start Date: </Col>
            <Col span={18}> Start Date </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> End Date: </Col>
            <Col span={18}> End Date </Col>
          </Col>
        </Row>
        <Row
          style={{
            margin: "0px 0px 20px 0px"
          }}
        >
          <Col span={24}>
            <Col span={6}> Employee: </Col>
            <Col span={18}>
              <Row gutter={16}>
                <Col span={6}> Senior QA: </Col>
                <Col span={10}>
                  QA1 <br /> SQA1 <br /> SQA2 <br /> SQA3 <br />{" "}
                </Col>
              </Row>
              <Row> &nbsp; </Row>
              <Row gutter={16}>
                <Col span={6}> QA: </Col>
                <Col span={10}>
                  QA1 <br /> QA1 <br /> QA2 <br /> QA3 <br />{" "}
                </Col>
              </Row>
              <Row> &nbsp; </Row>
              <Row gutter={16}>
                <Col span={6}> Tech. Lead: </Col>
                <Col span={10}>
                  Tl1 <br /> Tl2 <br /> Tl3 <br />{" "}
                </Col>
              </Row>
              <Row> &nbsp; </Row>
              <Row gutter={16}>
                <Col span={6}> Sof. Eng: </Col>
                <Col span={10}>
                  Sof. Eng1 <br /> Sof. Eng2 <br /> Sof. Eng3 <br />{" "}
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}
