import React, { Component } from "react";
import { Row, Col, Card, Icon, Progress, Button, Drawer } from "antd";
import { Pie } from "react-chartjs-2";
import "../../App.css";
import ConfigurationModel from "../Company/CommonDashboards/ConfigurationModel";

const data = {
  labels: ["Bronze", "Gold", "Platinum"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
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
          <Col span={10}>
            <Row gutter={6}>
              <Card bordered="true" title="Product overall rating">
                <Col span={8}>
                  <Row>
                    <span
                      style={{
                        fontSize: "4rem",
                        fontStyle: "bold"
                      }}
                    >
                      4.0
                    </span>
                  </Row>
                  <Row gutter={6}>
                    <Col span={3}>
                      <Icon type="star" theme="filled" />
                    </Col>
                    <Col span={3}>
                      <Icon type="star" theme="filled" />
                    </Col>
                    <Col span={3}>
                      <Icon type="star" theme="filled" />
                    </Col>
                    <Col span={3}>
                      <Icon type="star" theme="filled" />
                    </Col>
                    <Col span={3}>
                      <Icon type="star" />
                    </Col>
                  </Row>
                </Col>
                <Col span={16}>
                  <Row>
                    <Progress
                      percent={80}
                      status="active"
                      strokeColor={{
                        "0%": "#57bb8a",
                        "100%": "#57bb8a"
                      }}
                    />
                  </Row>
                  <Row>
                    <Progress
                      percent={60}
                      status="active"
                      strokeColor={{
                        "0%": "#9ace6a",
                        "100%": "#9ace6a"
                      }}
                    />
                  </Row>
                  <Row>
                    <Progress
                      percent={90}
                      status="active"
                      strokeColor={{
                        "0%": "#ffcf02",
                        "100%": "#ffcf02"
                      }}
                    />
                  </Row>
                  <Row>
                    <Progress
                      percent={20}
                      status="active"
                      strokeColor={{
                        "0%": "#ff9f02",
                        "100%": "#ff9f02"
                      }}
                    />
                  </Row>
                  <Row>
                    <Progress
                      percent={10}
                      status="active"
                      strokeColor={{
                        "0%": "#ff6f31",
                        "100%": "#ff6f31"
                      }}
                    />
                  </Row>
                </Col>
              </Card>
            </Row>
            <Row>&nbsp;</Row>
            <Row>
              <Col span={24}>
                <Card title="Number of companies" bordered="true">
                  <span
                    style={{
                      fontSize: "2.5rem"
                    }}
                  >
                    10
                  </span>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col span={14}>
            <Card bordered="true" title="License Chart">
              <Pie data={data} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
