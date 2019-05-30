import React, { Component } from "react";
import { Card, Row, Col, Button, Icon, Drawer } from "antd";
import { Doughnut, Line } from "react-chartjs-2";
import ConfigurationModel from "../CommonDashboards/ConfigurationModel";

// Doughnut Data
const data = {
  labels: ["Assigned", "Closed", "Opened", "Reopened", "Deferred", "Rejected"],
  datasets: [
    {
      data: [6, 4, 1, 2, 3, 1],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#91d5ff", "#f759ab"],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#91d5ff",
        "#f759ab"
      ]
    }
  ]
};

//Radar data
const lineData = {
  labels: [
    "June 1",
    "June 2",
    "June 3",
    "June 4",
    "June 5",
    "June 6",
    "June 7"
  ],
  datasets: [
    {
      label: "Opened",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: "Closed",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [28, 48, 40, 19, 96, 27, 100]
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
        <Row>
          <Col style={{ textAlign: "right" }}>
            <Button type="default" onClick={this.showDrawer}>
              <Icon type="setting" />
              Configuration
            </Button>
            <Drawer
              title=" Dashboard Configuration "
              placement="right"
              closable={true}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <ConfigurationModel />
            </Drawer>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row gutter={16}>
          <Col span={18}>
            <Row gutter={16}>
              <Col span={6}>
                <Card
                  bordered={true}
                  style={{
                    height: "100px",
                    background: "#391085"
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Row>
                        <span
                          style={{
                            "font-size": "1.5rem",
                            color: "#d9d9d9"
                          }}
                        >
                          6
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            color: "#d9d9d9"
                          }}
                        >
                          Assigned
                        </span>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Icon
                        type="frown"
                        style={{
                          fontSize: "3rem",
                          color: "#d9d9d9",
                          opacity: "0.5"
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  bordered={true}
                  style={{
                    height: "100px",
                    background: "#10239e"
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Row>
                        <span
                          style={{
                            "font-size": "1.5rem",
                            color: "#d9d9d9"
                          }}
                        >
                          4
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            color: "#d9d9d9"
                          }}
                        >
                          Closed
                        </span>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Icon
                        type="check-circle"
                        style={{
                          fontSize: "3rem",
                          color: "#d9d9d9",
                          opacity: "0.5"
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  bordered={true}
                  style={{
                    height: "100px",
                    background: "#1890ff"
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Row>
                        <span
                          style={{
                            "font-size": "1.5rem",
                            color: "#d9d9d9"
                          }}
                        >
                          1
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            color: "#d9d9d9"
                          }}
                        >
                          Pending
                        </span>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Icon
                        type="warning"
                        style={{
                          fontSize: "3rem",
                          color: "#d9d9d9",
                          opacity: "0.5"
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  bordered={true}
                  style={{
                    height: "100px",
                    background: "#9d00ff"
                  }}
                >
                  <Row gutter={16}>
                    <Col span={12}>
                      <Row>
                        <span
                          style={{
                            "font-size": "1.5rem",
                            color: "#d9d9d9"
                          }}
                        >
                          1
                        </span>
                      </Row>
                      <Row>
                        <span
                          style={{
                            color: "#d9d9d9"
                          }}
                        >
                          Deferred
                        </span>
                      </Row>
                    </Col>
                    <Col span={12}>
                      <Icon
                        type="close"
                        style={{
                          fontSize: "3rem",
                          color: "#d9d9d9",
                          opacity: "0.5"
                        }}
                      />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>&nbsp;</Row>
            <Row gutter={16}>
              <Card title="Opened vs Closed">
                <Line data={lineData} />
              </Card>
            </Row>
          </Col>
          <Col span={6}>
            <Card style={{ height: "500px" }} bordered={true}>
              <h2>Defects Chart</h2>
              <Doughnut width="100%" data={data} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
