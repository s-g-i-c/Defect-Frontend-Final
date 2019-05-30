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
import Allocations from "./Allocation";

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
      }
    ];
    const columns = [
      {
        title: "Project ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "ProjectName Name",
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
            Add Project
          </Button>
          <br />
          <br />
          <Table columns={columns} dataSource={dataSource} />
        </div>
        <div style={{ background: "#f5f5f5" }}>
          <Drawer
            title="CREATE NEW PROJECT"
            width={"70%"}
            position={"bottom"}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <Allocations />
          </Drawer>
        </div>
      </React.Fragment>
    );
  }
}
