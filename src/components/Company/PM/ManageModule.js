import React, { Component } from "react";
import { Icon, Form, Input, Popconfirm, Modal, Table, Row, Col } from "antd";
import AddModule from "./AddModule";
import { Button } from "antd/lib/radio";

export default class ManageModule extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hideModal = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const columns = [
      {
        title: "Module Id",
        dataIndex: "age"
      },
      {
        title: "Module Name",
        dataIndex: "name"
      },
      {
        title: "SubModule",
        dataIndex: "address"
      },
      {
        title: "Edit",
        dataIndex: "",
        key: "x",
        render: () => (
          <Icon
            type="edit"
            className="datatable-icon"
            onClick={this.showModal}
          />
        )
      },

      {
        title: "Delete",
        dataIndex: "",
        key: "x",
        render: () => (
          <Popconfirm
            title="Are you sure, do you want delete this Company?"
            icon={<Icon type="question-circle-o" style={{ color: "red" }} />}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="hello" style={{ color: "red" }}>
              <Icon type="delete" className="datatable-icon" />
              Delete
            </a>
          </Popconfirm>
        )
      }
    ];
    const data = [
      {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park"
      },
      {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park"
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park"
      },
      {
        key: "4",
        name: "Disabled User",
        age: 99,
        address: "Sidney No. 1 Lake Park"
      }
    ];

    return (
      <div>
        <Button onClick={this.showModal}>Add Module</Button>

        <Modal
          title="EditModal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="Update"
          cancelText="cancel"
        >
          <Row>
            <Form>
              <Row>
                <Col span={24}>Module ID</Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input type="text" placeholder="Please Input" readOnly />
                </Col>
              </Row>
              <Row>&nbsp;</Row>
              <Row>
                <Col span={24}>Module Name</Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Input type="text" placeholder="Please Input" />
                </Col>
              </Row>
            </Form>
          </Row>
        </Modal>
        <AddModule />
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
