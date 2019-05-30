import React, { Component } from "react";
import { Table, Button, Row, Col, Icon, Drawer } from "antd";
import "antd/dist/antd.css";
import AddAllocation from "./Allocation";

const data = [
  {
    key: "1",
    name: "Tyron",
    Project: 32,
    Details: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    Project: 42,
    Details: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    Project: 32,
    Details: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    Project: 32,
    Details: "London No. 2 Lake Park"
  }
];

export default class ManageAllocations extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  onChange = e => {
    console.log(e);
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
        columnKey: "Project"
      }
    });
  };

  render() {
    let { sortedInfo } = this.state;
    sortedInfo = sortedInfo || {};
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Project",
        dataIndex: "Project",
        key: "agProjecte",
        sorter: (a, b) => a.Project - b.Project,
        sortOrder: sortedInfo.columnKey === "Project" && sortedInfo.order
      },
      {
        title: "Details",
        dataIndex: "Details",
        key: "Details"
      },
      {
        title: "Add Members",
        dataIndex: "Add Members",
        key: "Add Members",
        render: () => (
          <Icon type="idcard" theme="twoTone" onClick={this.showModal} />
        )
      },
      {
        title: "View",
        dataIndex: "View",
        key: "View",
        render: () => <Icon type="appstore" theme="twoTone" />
      }
    ];
    return (
      <div>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={8} xl={24} />
        </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={8} xl={24}>
            <Button type="primary" onClick={this.showModal}>
              <Icon type="plus" />
              Add Allocations
            </Button>
            <Drawer
              title="ALLOCATIONS"
              width={"60%"}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <AddAllocation />
            </Drawer>
          </Col>
        </Row>
        <Row> &nbsp; </Row>
        <Row type="flex" justify="space-around" align="middle">
          <Col xs={2} sm={4} md={6} lg={8} xl={24}>
            <Table
              columns={columns}
              dataSource={data}
              onChange={this.handleChange}
            />
            <div className="table-operations" />
          </Col>
        </Row>
      </div>
    );
  }
}
