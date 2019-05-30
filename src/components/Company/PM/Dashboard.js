import React, { Component } from "react";
import { Line, Radar, HorizontalBar } from "react-chartjs-2";
import { Row, Col, Card, Button, Icon, Progress } from "antd";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

export default class Dashboard extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };
  render() {
    return (
      <div>
        <Drawer
          title=" Dashboard Configuration "
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <ConfigurationModel />
        </Drawer>

        <Row>
          <Col style={{ textAlign: "right" }}>
            <Button type="default" onClick={this.showDrawer}>
              <Icon type="setting" />
              Configuration
            </Button>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Row>
                <Icon type="project" />
                <span> Total Projects</span>
              </Row>
              <Row>
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold"
                  }}
                >
                  12
                </span>
              </Row>
              <Row>
                <span
                  style={{
                    color: "#092b00",
                    fontWeight: "bold"
                  }}
                >
                  <Icon type="caret-up" /> 2%
                </span>{" "}
                From last month
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row>
                <Icon type="user" />
                <span> Total Developers Assigned</span>
              </Row>
              <Row>
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold"
                  }}
                >
                  50
                </span>
              </Row>
              <Row>
                <span
                  style={{
                    color: "#a8071a",
                    fontWeight: "bold"
                  }}
                >
                  <Icon type="caret-down" /> 5%
                </span>{" "}
                From last week
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row>
                <Icon type="user" />
                <span> Total QA Assigned</span>
              </Row>
              <Row>
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold"
                  }}
                >
                  3
                </span>
              </Row>
              <Row>
                <span
                  style={{
                    color: "#a8071a",
                    fontWeight: "bold"
                  }}
                >
                  <Icon type="caret-down" /> 1%
                </span>{" "}
                From last week
              </Row>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Row>
                <Icon type="line-chart" />
                <span> Success Ratio</span>
              </Row>
              <Row>
                <span
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold"
                  }}
                >
                  3
                </span>
              </Row>
              <Row>
                <span
                  style={{
                    color: "#a8071a",
                    fontWeight: "bold"
                  }}
                >
                  <Icon type="caret-down" /> 1%
                </span>{" "}
                From last week
              </Row>
            </Card>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Success Ratio">
              <HorizontalBar data={data} />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Some Ratio related to Project Manager">
              <Radar data={data} />
            </Card>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>
          <Row>
            <Col span={24}>
              <Card>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold"
                  }}
                >
                  Hospital Management System
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    color: "#bfbfbf"
                  }}
                >
                  {" "}
                  ongoing project
                </span>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={16}>
              <Card style={{ height: "450px" }}>
                <Line data={data} />
              </Card>
            </Col>
            <Col span={8}>
              <Card style={{ height: "450px" }}>
                <span>Total Defects</span>
                <Progress percent={30} />
                <span>New Defects</span>
                <Progress percent={50} status="active" />
                <span>Opened Defects</span>
                <Progress percent={70} />
                <span>Reopened Defects</span>
                <Progress percent={70} />
                <span>Reassigned Defects</span>
                <Progress percent={70} />
                <span>Closed Defects</span>
                <Progress percent={100} />
                <span>Referred Defects</span>
                <Progress percent={50} status="exception" />
                <span>Rejected Defects</span>
                <Progress percent={50} status="exception" />
              </Card>
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
