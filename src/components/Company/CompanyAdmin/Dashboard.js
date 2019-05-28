import React, { Component } from "react";
import { Card, Col, Row, Progress, Badge } from "antd";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="No.of Projects" bordered={true}>
              <Row gutter={16}>
                  <Col span={6}>
                    <span style={{fontSize: '2.5rem' }}>61&nbsp;</span>
                  </Col>
                  <Col span={18}>
                  Ongoing projects -{" "}
              <span>
                <strong>11</strong>
              </span>
              <Progress percent={70} status="active" />
              Pending projects -{" "}
              <span>
                <strong>5</strong>
              </span>
              <Progress
                percent={30}
                status="active"
                strokeColor={{
                  "0%": "#f5222d",
                  "100%": "#f5222d",
                }}
              />
                  </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Employee pool" bordered={true}>
              <Row gutter={16}>
                  <Col span={6}>
                    <span style={{fontSize: '2.5rem' }}>60&nbsp;</span>
                  </Col>
                  <Col span={18}>
                  In Projects -{" "}
              <span>
                <strong>54</strong>
              </span>
              <Progress percent={90} status="active" />
              In Bench -{" "}
              <span>
                <strong>6</strong>
              </span>
              <Progress
                percent={10}
                status="active"
                strokeColor={{
                  "0%": "#f5222d",
                  "100%": "#f5222d",
                }}
              />
                  </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              title="Employees Details"
              bordered={true}
            >
              <Row>
                <Col span={18}>Software Architect</Col>
                <Col span={6}>
                  <span>
                    <strong>4</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>QA Architect</Col>
                <Col span={6}>
                  <span>
                    <strong>3</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Project Manager</Col>
                <Col span={6}>
                  <span>
                    <strong>3</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Senior software developer</Col>
                <Col span={6}>
                  <span>
                    <strong>10</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Junior software developer</Col>
                <Col span={6}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Senior QA</Col>
                <Col span={6}>
                  <span>
                    <strong>10</strong>
                  </span>
                </Col>
              </Row>
              <Row>
                <Col span={18}>Junior QA</Col>
                <Col span={6}>
                  <span>
                    <strong>15</strong>
                  </span>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
