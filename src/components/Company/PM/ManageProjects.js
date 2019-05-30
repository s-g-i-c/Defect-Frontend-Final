import React from "react";

import {
  Table,
  Divider,
  Popconfirm,
  Icon,
  Button,
  Drawer,
  Form,
  Input,
  DatePicker,
  Col,
  Row,
  Tooltip,
  Avatar,
  Timeline
} from "antd";

class CompanyMain extends React.Component {
  state = {
    loading: false,
    visible: false,
    placement: "bottom"
  };

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
    const dataSource = [
      {
        key: "id",
        id: "P678",
        name: "IOT",
        abb: "Software Engineer",
        Email: "Mathan@gmail.com"
      },
      {
        key: "id",
        id: "C678",
        name: "Dilux",
        Designation: "Software Engineer",
        Email: "Dilux@gmail.com"
      },
      {
        key: "id",
        id: "C678",
        name: "Tyrone",
        Designation: "Software Engineer",
        Email: "Tyrone@gmail.com"
      }
    ];
    const columns = [
      {
        title: "Company ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Employee Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Designation",
        dataIndex: "Designation",
        key: "Designation"
      },
      {
        title: "Email",
        dataIndex: "Email",
        key: "Email"
      },
      {
        title: "Action",
        key: "action",

        render: () => (
          <span>
            <Tooltip title="Edit">
              <Icon
                type="edit"
                className="datatable-icon"
                style={{ color: "blue" }}
                onClick={this.showDrawer}
              />
            </Tooltip>
            <Divider type="vertical" />
            &nbsp; &nbsp;
            <Popconfirm
              title="Are you sure, do you want delete this Employee?"
              icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <Divider type="vertical" />
              <a href="hello" style={{ color: "red" }}>
                <Tooltip title="Delete">
                  <Icon type="delete" className="datatable-icon" />
                </Tooltip>
              </a>
            </Popconfirm>
            <Divider type="vertical" />
            &nbsp; &nbsp;
            <a href="hello" style={{ color: "green" }}>
              <Tooltip title="Full View">
                <Icon type="fullscreen" className="datatable-icon" />
              </Tooltip>
            </a>
          </span>
        )
      }
    ];

    return (
      <React.Fragment>
        <div style={{ padding: 4, background: "#f5f5f5;", minHeight: 320 }}>
          <Button type="primary" onClick={this.showDrawer}>
            <Icon type="plus" />
            Add Employees
          </Button>
          <br />
          <br />
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <div style={{ background: "#f5f5f5" }}>
          <Drawer
            title="CREATE NEW EMPLOYEE"
            width={"60%"}
            position={"bottom"}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Employee ID">
                    <Input
                      value="#EMP101"
                      id="employeeId"
                      disabled
                      style={{
                        border: "1px solid #719ECE"
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Employee Name">
                    <Input
                      placeholder="Please Enter Employee Name"
                      id="employeeName"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Designation">
                    <Input
                      placeholder="Designation"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Email_ID">
                    <Input
                      placeholder="Email ID"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item label="Contract Period">
                    <Input
                      value="3 Years"
                      id="Contract Period"
                      style={{
                        border: "1px solid #719ECE"
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Joining Date">
                    <DatePicker
                      getPopupContainer={trigger => trigger.parentNode}
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "4px",
                        width: "100%"
                      }}
                    />
                  </Form.Item>
                </Col>

                <Col span={10} type="dashed">
                  <Avatar
                    style={{
                      margin: "16px 0 0  55px",
                      background: "linear-gradient(to right, #7474bf, #348ac7)"
                    }}
                    size={144}
                    icon="user"
                  />
                </Col>
                <Col span={2}>
                  <Timeline>
                    <Timeline.Item />
                    <br />

                    <br />
                    <br />
                    <p>OR</p>
                    <br />

                    <br />
                    <br />
                    <Timeline.Item />
                  </Timeline>
                </Col>
              </Row>
            </Form>
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "100%",
                borderTop: "1px solid #e9e9e9",
                padding: "10px 16px",
                background: "#fff",
                textAlign: "right"
              }}
            >
              <Button
                type="danger"
                icon="close"
                onClick={this.onClose}
                style={{ marginRight: 8, background: "#cc104b", color: "#FFF" }}
              >
                Cancel
              </Button>
              <Button icon="plus" onClick={this.onClose} type="primary">
                Add
              </Button>
            </div>
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyMain;
