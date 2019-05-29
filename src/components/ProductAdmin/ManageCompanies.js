import React from "react";

import {
  Table,
  Divider,
  Popconfirm,
  Icon,
  Button,
  Drawer,
  Select,
  Form,
  Input,
  DatePicker,
  Col,
  Row,
  Tooltip,
  Upload,
  message
} from "antd";

const { Option } = Select;
class CompanyMain extends React.Component {
  state = {
    loading: false,
    visible: false
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
    const Dragger = Upload.Dragger;

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
        id: "C678",
        name: "Samuel Gnanam",
        abbreviation: "Sgic",
        period: "1Year",
        admin: "Mathan"
      },
      {
        key: "id",
        id: "C452",
        name: "Invicta Inovations",
        abbreviation: "Invicta",
        period: "1Year",
        admin: "Theepan"
      },

      {
        key: "id",
        id: "C124",
        name: "Sysco Labs",
        abbreviation: "Sysco",
        period: "1Year",
        admin: "Hari"
      },

      {
        key: "id",
        id: "C777",
        name: "Mithra inovations",
        abbreviation: "mithra",
        period: "2Year",
        admin: "Tyron"
      }
    ];
    const columns = [
      {
        title: "Company ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Company Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Abbreviation",
        dataIndex: "abbreviation",
        key: "abbreviation"
      },
      {
        title: "Lisence period",
        dataIndex: "period",
        key: "period"
      },

      {
        title: "Company Admin",
        dataIndex: "admin",
        key: "admin"
      },
      {
        title: "Action",
        key: "action",

        render: () => (
          <span>
            <Popconfirm
              title="Are you sure, do you want edit this Company?"
              icon={
                <Icon type="question-circle-o" style={{ color: "primary" }} />
              }
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="hello">
                <Tooltip title="Edit">
                  <Icon
                    type="edit"
                    className="datatable-icon"
                    style={{ color: "primary" }}
                  />
                </Tooltip>
              </a>
            </Popconfirm>
            <Divider type="vertical" />
            &nbsp; &nbsp;
            <Popconfirm
              title="Are you sure, do you want delete this Company?"
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
        <div style={{ padding: 4, background: "#f5f5f5;", minHeight: 360 }}>
          <Button type="primary" onClick={this.showDrawer}>
            <Icon type="plus" />
            Add Company
          </Button>
          <br />
          <br />
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <div>
          <Drawer
            title="CREATE NEW COMPANY"
            width={"60%"}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Form layout="vertical" hideRequiredMark>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Company ID">
                    <Input
                      value="#COM101"
                      id="companyId"
                      disabled
                      style={{
                        border: "1px solid #719ECE"
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Company Name">
                    <Input
                      placeholder="Please Enter Company Name"
                      id="companyName"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Abberivation">
                    <Input
                      placeholder="Abberivation"
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
                  <Form.Item label="Liscence Period">
                    <Input
                      value="3 Years"
                      id="lisencePeriod"
                      style={{
                        border: "1px solid #719ECE"
                      }}
                      disabled
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Company URL">
                    <Input
                      addonBefore="http://"
                      addonAfter=".com"
                      placeholder="URL"
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "3px"
                      }}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Company Admin">
                    <Input
                      placeholder="Please Enter Company Admin"
                      id="companyAdmin"
                      style={{ border: "1px solid #719ECE" }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Lisence Package">
                    <Select
                      placeholder="Please choose the Package"
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "4px"
                      }}
                    >
                      <Option value="bronze">Bronze</Option>
                      <Option value="silver">Silver</Option>
                      <Option value="gold">Gold</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Liscence Period">
                    <DatePicker.RangePicker
                      getPopupContainer={trigger => trigger.parentNode}
                      style={{
                        border: "1px solid #719ECE",
                        borderRadius: "4px",
                        width: "100%"
                      }}
                    />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Dragger {...props} style={{ height: "30%" }}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" size="10px" />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag Agreement Files
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
        </div>
      </React.Fragment>
    );
  }
}

export default CompanyMain;
