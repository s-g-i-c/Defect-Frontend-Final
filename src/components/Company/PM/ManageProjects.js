import React, { Component } from "react";

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
  Timeline,
  Upload,
  message
} from "antd";

export default class ManageProjects extends Component {
  state = {
    loading: false,
    visible: false,
    visiblemodel: false
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
  showModal = () => {
    this.setState({
      visiblemodel: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visiblemodel: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visiblemodel: false
    });
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };
  render() {
    const Dragger = Upload.Dragger;
    const { visible } = this.state; // for Model

    const props = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
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
            <Tooltip title="Full View">
              <Icon
                type="fullscreen"
                className="datatable-icon"
                onClick={this.showModal}
              />
            </Tooltip>
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
                <Col span={12}>
                  {" "}
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
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
          <Drawer
            title="CREATE NEW EMPLOYEE"
            width={"60%"}
            position={"bottom"}
            onClose={this.handleCancel}
            visible={this.state.visiblemodel}
            footer={[
              <Button key="back" onClick={this.handleCancel}>
                Return
              </Button>
            ]}
          >
            <div>
              <Row
                style={{
                  margin: "0px 0px 20px 0px"
                }}
              >
                <Col span={24}>
                  <Col span={6}> Module Name: </Col>
                  <Col span={18}> ModuleName </Col>
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
                    Description:{" "}
                  </Col>
                  <Col span={18}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  </Col>
                </Col>
                {/* <Col span={12}>col-12</Col> */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur voluptatibus accusantium necessitatibus culpa
                    exercitationem autem excepturi incidunt eveniet officiis
                    eos, eius facere, nostrum voluptates, fuga earum aliquam
                    esse blanditiis quae?{" "}
                  </Col>
                </Col>
              </Row>
              <Row
                style={{
                  margin: "0px 0px 20px 0px"
                }}
              >
                <Col span={24}>
                  <Col span={6}> Comments: </Col>
                  <Col span={18}>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur voluptatibus accusantium necessitatibus culpa
                    exercitationem autem excepturi incidunt eveniet officiis
                    eos, eius facere, nostrum voluptates, fuga earum aliquam
                    esse blanditiis quae?. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Similique nisi in dignissimos.
                    Saepe dolorem dolorum dolor consectetur perspiciatis quis
                    molestiae, eligendi quisquam labore sunt in quas debitis,
                    doloribus, aliquam nam!
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
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}
