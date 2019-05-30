import React from "react";
import "antd/dist/antd.css";
import { Table, Icon, Button, Drawer } from "antd";
import EditModel from "./Editproject";
// import Project from "./Project";

class Projectview extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
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
  render() {
    const columns = [
      {
        title: "Project ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Project Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Start Date",
        dataIndex: "startdate",
        key: "startdate"
      },
      {
        title: "End Date",
        dataIndex: "enddate",
        key: "enddate"
      },
      {
        title: "Duration",
        dataIndex: "duration",
        key: "duration"
      },
      {
        title: "Assign To",
        dataIndex: "assignTo",
        key: "assignTo"
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        render: () => (
          <div>
            <Button onClick={this.showModal}>
              {" "}
              <Icon type="edit" style={{ color: "skyblue" }} />
            </Button>
            &nbsp;&nbsp;
            <Button>
              <Icon type="delete" style={{ color: "red" }} />
            </Button>
          </div>
        )
      }
    ];

    const data = [
      {
        key: "1",
        id: "001",
        name: "Defect-Tracker",
        startdate: "2019-06-01",
        enddate: "2019-06-28",
        duration: "One Month",
        assignTo: "Mathan"
      },
      {
        key: "1",
        id: "001",
        name: "Defect-Tracker",
        startdate: "2019-06-01",
        enddate: "2019-06-28",
        duration: "One Month",
        assignTo: "Mathan"
      },
      {
        key: "2",
        id: "002",
        name: "Defect-Tracker",
        startdate: "2019-06-01",
        enddate: "2019-06-28",
        duration: "One Month",
        assignTo: "Mathan"
      },
      {
        key: "3",
        id: "003",
        name: "Defect-Tracker",
        startdate: "2019-06-01",
        enddate: "2019-06-28",
        duration: "One Month",
        assignTo: "Mathan"
      }
    ];
    return (
      <div
        style={{
          width: "100%",
          padding: 24,
          background: "#fff",
          minHeight: 300
        }}
      >
        <Drawer
          title="Edit Project"
          width={"60%"}
          onClose={this.handleCancel}
          visible={this.state.visible}
        >
          <EditModel />
        </Drawer>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Projectview;
