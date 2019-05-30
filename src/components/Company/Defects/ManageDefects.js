import React, { Component } from "react";
import {
  Table,
  Button,
  Row,
  Icon,
  Divider,
  Tooltip,
  Popconfirm,
  Drawer,
  Select,
  Col,
  Input
} from "antd";
import AddDefects from "./AddDefects";
import AddDefectForm from "./AddDefectForm";
import EditDefect from "./EditDefect";

export default class ManageDefects extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    visible: false,
    visibleModel: false,
    ModelMore: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClosex = () => {
    this.setState({
      visibleModel: false
    });
  };

  showModal = () => {
    this.setState({
      visibleModel: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visibleModel: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visibleModel: false
    });
  };

  showModalMore = () => {
    this.setState({
      ModelMore: true
    });
  };

  handleOkMore = e => {
    console.log(e);
    this.setState({
      ModelMore: false
    });
  };
  handleCancelMore = e => {
    console.log(e);
    this.setState({
      ModelMore: false
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
  onClose = () => {
    this.setState({
      visible: false,
      visiblemodel: false
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
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const Option = Select.Option;
    const { TextArea } = Input;
    const data = [
      {
        key: "1",
        defectId: "Defect Id",
        moduleName: "Module Name",
        description: "Description",
        severity: "Severity",
        priority: "Priority",
        type: "Type",
        status: "Status"
      }
    ];
    const columns = [
      {
        title: "DefectId",
        dataIndex: "defectId",
        key: "defectId",
        sorter: (a, b) => a.defectId.length - b.defectId.length,
        sortOrder: sortedInfo.columnKey === "defectId" && sortedInfo.order
      },
      {
        title: "Module Name",
        dataIndex: "moduleName",
        key: "moduleName",
        sorter: (a, b) => a.moduleName - b.moduleName,
        sortOrder: sortedInfo.columnKey === "moduleName" && sortedInfo.order
      },
      {
        title: "Severity",
        dataIndex: "severity",
        key: "severity",
        filters: [
          { text: "High", value: "high" },
          { text: "Medium", value: "medium" },
          { text: "Low", value: "low" }
        ],
        filteredValue: filteredInfo.severity || null,
        onFilter: (value, record) => record.severity.includes(value),
        sorter: (a, b) => a.severity.length - b.severity.length,
        sortOrder: sortedInfo.columnKey === "severity" && sortedInfo.order
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        filters: [
          { text: "High", value: "high" },
          { text: "Medium", value: "medium" },
          { text: "Low", value: "low" }
        ],
        filteredValue: filteredInfo.priority || null,
        onFilter: (value, record) => record.priority.includes(value),
        sorter: (a, b) => a.priority.length - b.priority.length,
        sortOrder: sortedInfo.columnKey === "priority" && sortedInfo.order
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        filters: [
          { text: "Type1", value: "type1" },
          { text: "Type2", value: "type2" }
        ],
        filteredValue: filteredInfo.type || null,
        onFilter: (value, record) => record.type.includes(value),
        sorter: (a, b) => a.type.length - b.type.length,
        sortOrder: sortedInfo.columnKey === "type" && sortedInfo.order
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        filters: [
          { text: "Open", value: "open" },
          { text: "Re-Open", value: "reopen" },
          { text: "Deferred", value: "deferred" }
        ],
        filteredValue: filteredInfo.status || null,
        onFilter: (value, record) => record.status.includes(value),
        sorter: (a, b) => a.status.length - b.status.length,
        sortOrder: sortedInfo.columnKey === "status" && sortedInfo.order
      },
      {
        title: "More",
        dataIndex: "",
        key: "x",
        render: () => (
          // <Button type="link" icon="ellipsis" onClick={this.showModal} />
          <span>
            <Tooltip title="Edit">
              <Icon
                type="edit"
                onClick={this.showDrawer}
                className="datatable-icon"
                style={{ color: "primary" }}
              />
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip title="ChangeStatus">
              <Icon
                type="plus"
                onClick={this.showModalMore}
                className="datatable-icon"
                style={{ color: "primary" }}
              />
            </Tooltip>
            <Divider type="vertical" />
            <Popconfirm
              title="Are you sure, do you want delete this Company?"
              icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
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
      <div>
        <Drawer
          visible={this.state.visibleModel}
          title="DefectName"
          width="60%"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>
          ]}
        >
          <AddDefectForm />
        </Drawer>

        <Drawer
          visible={this.state.ModelMore}
          title="DefectName"
          width="60%"
          onClose={this.handleOkMore}
          onCancel={this.handleCancelMore}
          footer={[
            <Button key="back" onClick={this.handleCancelMore}>
              Return
            </Button>
          ]}
        >
          <Row>
            <Col span={24}>
              <Col span={6}> Status: </Col>
              <Col span={18}>
                <Select
                  showSearch
                  style={{ width: "30%" }}
                  placeholder=" Select Status"
                >
                  <Option value="open"> Open </Option>
                  <Option value="reopern"> Re-Open </Option>
                  <Option value="deferd"> Deferred </Option>
                  <Option value="closed"> Closed </Option>
                </Select>
              </Col>
            </Col>
          </Row>
          <Row> &nbsp; </Row>
          <Row>
            <Col span={24}>
              <Col span={6}> Comments: </Col>
              <Col span={18}>
                <Col span={20}>
                  <TextArea rows={4} />{" "}
                </Col>
              </Col>
            </Col>
          </Row>
        </Drawer>

        <Drawer
          title="CREATE NEW DEFECT"
          visible={this.state.visible}
          title="DefectName"
          width="60%"
          onClose={this.onClose}
          onCancel={this.onClose}
        >
          <EditDefect />
        </Drawer>

        <Row>
          <AddDefects />
        </Row>

        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
